import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(
    private http:HttpClient
  ) { }

  users()
  {
    return this.http.get('https://gorest.co.in/public-api/users?_format=json&access-token=H5PVCnaljhicbKFWEiVKnIEpMQF1tTL5iDyG')
    .pipe(

    );
  } 

}
