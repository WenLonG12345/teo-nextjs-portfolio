import React from "react";
import axios from "axios";

const getGithubRepos = async (username: string) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    let repos = res.data;
    // let latestSixRepos = repos.splice(0, 8);
    // return latestSixRepos;
    let result = repos
      ?.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export default getGithubRepos;
