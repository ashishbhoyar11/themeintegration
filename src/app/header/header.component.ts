import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {MyserviceService } from '../services/myservice.service';
import { Router,ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm:FormGroup;
  errorMsg:any;
  constructor(public service:MyserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      username: new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }

  login()
  {
    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe((data:any)=>{
        console.log("After Login"+JSON.stringify(data));
        if(data.status==200){
          localStorage.setItem('userToken', data.token);
          localStorage.setItem('userName', data.data.username);
          $('#loginModel').modal('hide');
          this.router.navigate(['/dashbord']);
        }
      }, (err) => {
        console.log("Error : "+ JSON.stringify(err));
        this.errorMsg=err.error.msg;
      })
    } 
  }
  

}
