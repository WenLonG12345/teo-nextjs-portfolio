import React from 'react';
import axios from 'axios';
import moment from 'moment';

const shortenDescription = (description) => {
    const defaultContinue = " Continue reading on Medium »"

    description = description?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "").substring(0, 100)
    if (description.length <= 100 - defaultContinue.length) {
        description += defaultContinue
    }
    description += "..."

    return description
}

const getMediumArticles = async ({ username }) => {
    try {
        console.log({ username })
        const { data } = await axios.get(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
        )

        let { items } = data || {}

        const article = items.map(({ title, thumbnail, link, pubDate, description }) => {
            return {
                title: title,
                thumbnail: thumbnail,
                url: link,
                date: moment(pubDate).format("YYYY - MMM DD"),
                description: shortenDescription(description)
            }
        })

        return article;


    } catch (err) {
        console.log(err);
    }
}

export default getMediumArticles
