import { AppModel } from '../models/appState.model';

export const initialState: AppModel = {
  list: [],
  page: 0,
  portion: 10,
  breed: 'beng',
  load: true,
  loadMore: true,
};
