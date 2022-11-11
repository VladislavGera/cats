import { CardModel } from './card.model';

export interface AppModel {
  list: CardModel[];
  page: number;
  portion: number;
  breed: string;
  load: boolean;
  loadMore: boolean;
}
