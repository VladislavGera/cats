import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { refreshState, setParams, setLoader } from '../../state/list.action';

import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppModel } from 'src/app/models/appState.model';
import { SearchModel } from 'src/app/models/searchParms.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() getList: any;
  public catsList: SearchModel[] = [
    {
      breed: 'Abyssinian',
      breed_ids: 'abys',
    },
    {
      breed: 'Aegean',
      breed_ids: 'aege',
    },
    {
      breed: 'Bengal',
      breed_ids: 'beng',
    },
    {
      breed: 'British Shorthair',
      breed_ids: 'bsho',
    },
    {
      breed: 'Charteux',
      breed_ids: 'char',
    },
    {
      breed: 'Cyprus',
      breed_ids: 'cypr',
    },
    {
      breed: 'Donskoy',
      breed_ids: 'dons',
    },
    {
      breed: 'Havana Brown',
      breed_ids: 'hbro',
    },
    {
      breed: 'Korat',
      breed_ids: 'kora',
    },
    {
      breed: 'Manx',
      breed_ids: 'manx',
    },
    {
      breed: 'Persian',
      breed_ids: 'pers',
    },
  ];

  constructor(private api: HttpService, private store: Store<AppModel>) {}

  filterForm = new FormGroup({
    portion: new FormControl(`10`),
    breed: new FormControl(`beng`),
  });

  public getFilterValue() {
    this.store.dispatch(setLoader({ data: true }));

    this.store.dispatch(refreshState());
    this.store.dispatch(setParams({ data: this.filterForm.value }));
    this.getList();
  }
}
