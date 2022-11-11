import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpListCard(data: any) {
    return this.http
      .get<any>(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${data.breed}&limit=${data.portion}&page=${data.page}&order=DESC`,
        {
          observe: 'response',
          headers: {
            Accept: '*/*',
            'x-api-key': `live_yCSee158SNwAIQhSSChN2ZGEzL0TX9zkguhjb0B8VoNsRBRfwUHBJTnN4mpegPUE`,
          },
        }
      )
      .pipe(
        map((res: any) => {
          const count = res.headers.get('pagination-count');
          const body = res.body;

          return { count, body };
        })
      );
  }
}
