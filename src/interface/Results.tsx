import { Item } from './Item';

export interface Results {
  artists?: {
    items: Item[];
  };
  tracks?: {
    items: Item[];
  };
  albums?: {
    items: Item[];
  };
  recommendations?: {
    artists?: {
      items: Item[];
    };
    tracks?: {
      items: Item[];
    };
    albums?: {
      items: Item[];
    };
  };
}
