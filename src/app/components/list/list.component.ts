import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/shared/http.service';
import { increasePage, setLoader } from '../../state/list.action';
import { getListPhotos } from '../../state/list.selectors';
import { CardModel } from 'src/app/models/card.model';

import { AppModel } from 'src/app/models/appState.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  public list!: CardModel[];
  public load!: boolean;
  public loadMore!: boolean;
  public subscriptionGetPhotos!: Subscription;
  @Input() getList: any;

  constructor(private api: HttpService, private store: Store<AppModel>) {}

  public lodeMore() {
    this.store.dispatch(setLoader({ data: true }));
    this.store.dispatch(increasePage());
    this.getList();
  }

  ngOnInit(): void {
    this.subscriptionGetPhotos = this.store
      .select(getListPhotos)
      .subscribe((data) => {
        this.list = data.list;
        this.load = data.load;
        this.loadMore = data.loadMore;
      });
  }

  ngOnDestroy(): void {
    this.subscriptionGetPhotos.unsubscribe();
  }
}
