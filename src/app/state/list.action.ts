import { createAction, props } from '@ngrx/store';
import { CardModel } from '../models/card.model';

export const setList = createAction(
  'setList',
  props<{ res: { body: CardModel[]; count: number } }>()
);
export const setLoader = createAction('setLoader', props<{ data: boolean }>());
export const setLoadMore = createAction(
  'setLoadMore',
  props<{ data: boolean }>()
);
export const setParams = createAction('setParams', props<{ data: any }>());

export const increasePage = createAction('increasePage');
export const refreshState = createAction('refreshState');
