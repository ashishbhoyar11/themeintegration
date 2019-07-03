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
    return this.http.get('https://reqres.in/api/users?page=2')
    .pipe(

    );
  }
  
  employeeList()
  {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    .pipe(

    );
  }

  deleteEmployee(id)
  {
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id)
    .pipe(

    );
  }

  addEmployee(empdata)
  {
    return this.http.post('http://dummy.restapiexample.com/api/v1/create',empdata)
    .pipe(
    );
  }

  getEmpRecord(id)
  {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employee/'+id)
    .pipe(
    );
  }

  updateEmployee(empdata,id)
  {
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/'+id,empdata)
    .pipe(
    );
  }

}
