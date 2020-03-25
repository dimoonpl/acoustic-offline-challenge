export interface IArticleCard {
  id: string;
  name: string;
  thumbnail: string;
}

export interface IArticleListProps {
  articleList: IArticleCard[];
}

export interface IArticleProps {
  name: string;
  heading: string;
  author: string;
  date: string;
  leadImage: {
    src: string,
    caption: string,
    credit: string,
  }
  body: string[];
}