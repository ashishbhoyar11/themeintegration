import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {MyserviceService } from '../../services/myservice.service';
import {Router,ActivatedRoute} from '@angular/router';
import { error } from 'util';
declare var $: any;

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  updtBlog:FormGroup;
  token:any;
  blogData:any;
  singleData={};
  filedata:any;
  constructor(public service:MyserviceService,public router:Router,private route: ActivatedRoute) { }

  ngOnInit() {

    this.updtBlog = new FormGroup({
      name: new FormControl("",[Validators.required]),
      title: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      date: new FormControl("",[Validators.required]),
      image:new FormControl()
   });

    console.log('Dashbord');
    this.token=localStorage.getItem('userToken');
    this.allBlog();
    $('#blogList').DataTable();
    console.log('this.token : '+this.token);
  }

  allBlog()
  {
    this.service.getallblog().subscribe((res:any)=>{
      console.log(res);
      if(res.status==200)
      {
        return this.blogData=res.data;
      } 
    },(error)=>{
      console.log(error);
    });
  }

  deleteBlog(id)
  {
    console.log(id+' '+this.token);
    this.service.deleteblog(id).subscribe((res:any)=>{
      console.log(res);
      if(res.status==200)
      {
        this.allBlog();
      } 
    },(error)=>{
      console.log(error);
    });

  }

  editBlog(id)
  {
    this.service.editblog(id).subscribe((res:any)=>{
      if(res.status==200)
      { 
        this.singleData=res.data[0];
        $('#editModal').modal('show');
      }
    },(error)=>{
      console.log(error);
    });
  }

  fileEvent(e){
    this.filedata=e.target.files[0];
    console.log(e);
  }

  updateBlog(id)
  {
    if(id)
    {
      let formdata = new FormData();
        formdata.append("name",this.updtBlog.value.name);
        formdata.append("title",this.updtBlog.value.title);
        formdata.append("description",this.updtBlog.value.description);
        formdata.append("date",this.updtBlog.value.date);
        if(this.filedata){
          formdata.append("blogimg",this.filedata);
        }
       
      this.service.updateblog(formdata,id).subscribe((res:any)=>{
        if(res.status==200)
        {
          this.updtBlog.reset();
          $('#editModal').modal('hide');
          this.allBlog();
        }
      },(error)=>{
          console.log(error);
      });
    }

    // if(id)
    // {
    //   this.service.updateblog(this.updtBlog.value,id).subscribe((res:any)=>{
    //     if(res.status==200)
    //     {
    //       $('#editModal').modal('hide');
    //       this.allBlog();
    //     }
    //   },(error)=>{
    //       console.log(error);
    //   });
    // }
    
  }

}
