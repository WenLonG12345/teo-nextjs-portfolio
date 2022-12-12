import React from "react";
import axios from "axios";
import moment from "moment";
import { ArticleRes } from "../types/article";

const shortenDescription = (description: string) => {
  const defaultContinue = " Continue reading on Medium »";

  description = description
    ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")
    .substring(0, 100);
  if (description.length <= 100 - defaultContinue.length) {
    description += defaultContinue;
  }
  description += "...";

  return description;
};

const getMediumArticles = async (username: string) => {
  try {
    const { data } = await axios.get<ArticleRes>(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
    );

    let { items } = data || {};

    const article = items.map(
      ({ title, thumbnail, guid, pubDate, description, categories }) => {
        return {
          title: title,
          thumbnail: thumbnail,
          url: guid,
          date: moment(pubDate).format("YYYY - MMM DD"),
          description: shortenDescription(description),
          categories: categories,
        };
      }
    );

    return article;
  } catch (err) {
    console.log(err);
  }
};

export default getMediumArticles;
