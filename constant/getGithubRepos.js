import React from 'react';
import axios from "axios";

const getGithubRepos = async (data) => {
    try {
        const { username } = data;

        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?sort=created`,
        );

        let repos = res.data;
        let latestSixRepos = repos.splice(0, 6);
        return latestSixRepos;

    } catch (err) {
        console.log(err);
    }
}

export default getGithubRepos;
