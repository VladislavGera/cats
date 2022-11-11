import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppModel } from '../models/appState.model';

const getListState = createFeatureSelector<AppModel>('list');

export const getListPhotos = createSelector(getListState, (state) => {
  return state;
});

export const getSearchParams = createSelector(getListState, (state) => {
  return {
    page: state.page,
    portion: state.portion,
    breed: state.breed,
  };
});
