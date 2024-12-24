import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cashier } from '../model/master';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

private baseUrl = 'http://103.92.47.69/hitechErp/Api/Accounting/CashierAccountingCashRecieve.php';

  constructor(private http:HttpClient) { }

  saveCashier(obj:any):Observable<Cashier>{
    return this.http.post<Cashier>(this.baseUrl, obj)
  }

}
