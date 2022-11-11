import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './shared/http.service';
import { Store } from '@ngrx/store';
import { getSearchParams } from './state/list.selectors';
import { setList, setLoader } from './state/list.action';
import { AppModel } from './models/appState.model';
import { Subscription } from 'rxjs';
import { FilterModel } from './models/filterParams.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  params!: FilterModel;
  subscriptionGetParams!: Subscription;
  subscriptionSetParams!: Subscription;

  constructor(private api: HttpService, private store: Store<AppModel>) {}

  public getList(): void {
    this.subscriptionGetParams = this.store
      .select(getSearchParams)
      .subscribe((params) => {
        this.params = params;
      });

    this.subscriptionSetParams = this.api.httpListCard(this.params).subscribe(
      (res) => {
        this.store.dispatch(setList({ res }));
      },
      (err) => {
        console.error(err);
      },
      () => {
        this.store.dispatch(setLoader({ data: false }));
      }
    );
  }

  public ngOnInit(): void {
    this.getList();
  }

  ngOnDestroy(): void {
    this.subscriptionGetParams.unsubscribe();
    this.subscriptionSetParams.unsubscribe();
  }
}
