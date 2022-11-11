import { createReducer, on, Action } from '@ngrx/store';
import { AppModel } from '../models/appState.model';
import { CardModel } from '../models/card.model';
import {
  setList,
  setParams,
  increasePage,
  refreshState,
  setLoader,
} from './list.action';
import { initialState } from './list.state';

const _listReducer = createReducer(
  initialState,
  on(setList, (state: AppModel, action) => {
    let list: CardModel[] = [...state.list, ...action.res.body];

    let portions: number = Math.ceil(action.res.count / state.portion);

    let loadMore: boolean = portions > state.page + 1;

    return {
      ...state,
      list,
      loadMore,
    };
  }),
  on(setLoader, (state: AppModel, action) => {
    return {
      ...state,
      load: action.data,
    };
  }),
  on(setParams, (state: AppModel, action) => {
  

    return {
      ...state,
      breed: action.data.breed,
      portion: action.data.portion,
    };
  }),

  on(increasePage, (state) => {
    return {
      ...state,
      page: state.page + 1,
    };
  }),
  on(refreshState, (state) => {
    return {
      ...state,
      list: [],
      page: 0,
    };
  })
);

export function listReducer(state: any, action: Action) {
  return _listReducer(state, action);
}
