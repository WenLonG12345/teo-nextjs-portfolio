export type Article = {
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  date: string;
  categories: string[];
  guid: string;
  pubDate: string;
}

export type ArticleRes = {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Article[];
}