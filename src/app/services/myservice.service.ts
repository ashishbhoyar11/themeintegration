import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



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

  loginUser(userdata)
  {
    return this.http.post('http://www.dnxpress.in/CodeIgniter-3.1.10-Rest-Api-New/index.php/myapi/login',userdata)
    .pipe(

    );
  }

  getallblog()
  {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 
    //     'Content-Type':  'application/json',
    //     'Authorization':token
    //   })
    // };
    return this.http.get('http://www.dnxpress.in/CodeIgniter-3.1.10-Rest-Api-New/index.php/myapi/getallblog');
  }

  addblog(data)
  {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 
    //     'Content-Type':  'application/json',
    //     'Authorization':token
    //   })
    // };

    return this.http.post('http://www.dnxpress.in/CodeIgniter-3.1.10-Rest-Api-New/index.php/myapi/addblog',data).pipe();

  }

  deleteblog(id)
  {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 
    //     'Content-Type':  'application/json',
    //     'Authorization':token
    //   })
    // };

    return this.http.delete('http://www.dnxpress.in/CodeIgniter-3.1.10-Rest-Api-New/index.php/myapi/deleteblog/'+id).pipe();
  }
  editblog(id)
  {
    return this.http.get('http://www.dnxpress.in/CodeIgniter-3.1.10-Rest-Api-New/index.php/myapi/getsingleblog/'+id).pipe();
  }

  updateblog(updateData,id)
  {
    return this.http.post('http://www.dnxpress.in/CodeIgniter-3.1.10-Rest-Api-New/index.php/myapi/updateblog/'+id,updateData).pipe();
  }

}
