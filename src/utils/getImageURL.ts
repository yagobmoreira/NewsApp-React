import { Item } from './types';

const getImageURL = (item: Item) => {
  if (item) {
    const imageURL = Object.values(item)[8] as string;
    if (imageURL) {
      return JSON.parse(imageURL).image_fulltext;
    }
  }
};

export default getImageURL;
