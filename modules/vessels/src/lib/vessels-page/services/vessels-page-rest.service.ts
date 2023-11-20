import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VesselsRowData } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class VesselsPageRestService {
  private httpClient: HttpClient = inject(HttpClient);

  getRowData(): Observable<VesselsRowData[]> {
    return this.httpClient.get<VesselsRowData[]>('https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json');
  }
}
