import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {MyserviceService } from '../../services/myservice.service';
import { Router,ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  addblog:FormGroup;
  constructor(public service:MyserviceService,private router:Router) { }
  token:any;
  filedata:any;
  ngOnInit() {
    console.log('Add Blog');
    this.token=localStorage.getItem('userToken');
    
    this.addblog= new FormGroup({
      name:new FormControl("",[Validators.required]),
      title:new FormControl("",[Validators.required]),
      description:new FormControl("",[Validators.required]),
      date:new FormControl("",[Validators.required]),
      image:new FormControl("",[Validators.required])
    });
  }

  
  fileEvent(e){
      this.filedata=e.target.files[0];
      console.log(e);
  }

  addBlog()
  {
    if(this.addblog.valid)
    {
      // console.log('Add Blog : '+JSON.stringify(this.addblog.value.image));
        let formdata = new FormData();
        formdata.append("blogimg",this.filedata);
        formdata.append("name",this.addblog.value.name);
        formdata.append("title",this.addblog.value.title);
        formdata.append("description",this.addblog.value.description);
        formdata.append("date",this.addblog.value.date);

      this.service.addblog(formdata).subscribe((res:any)=>{
        console.log('res : '+JSON.stringify(res));
        if(res.status==200)
        {
          this.router.navigate(['/dashbord']);
        }
      },(error)=>{
        console.log(error);
      });
        
      // this.service.addblog(this.addblog.value).subscribe((res:any)=>{
      //   console.log('res : '+JSON.stringify(res));
      //   if(res.status==200)
      //   {
      //     this.router.navigate(['/dashbord']);
      //   }
      // },(error)=>{
      //   console.log(error);
      // });
    }
  }

}
