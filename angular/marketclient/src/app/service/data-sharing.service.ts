import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CestaItem } from '../model/CestaItem';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private cestaSource = new BehaviorSubject<CestaItem[]>([]);
  cesta$ = this.cestaSource.asObservable();

  updateCesta(cesta: CestaItem[]) {
    this.cestaSource.next(cesta);
  }
}
