import { Component, OnInit } from '@angular/core';
import {MyserviceService } from '../../services/myservice.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {

  emp : any;
  isSingleEmp:any;
  formdata:FormGroup;
  singleEmp:any;
  
  constructor(public service:MyserviceService) { }

  ngOnInit() {
    $('#Loader').show();

    this.formdata = new FormGroup({
      name: new FormControl("", [Validators.required]),
      salary: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required])
    });
   
    this.isSingleEmp=false;
    this.employeelist();

    this.singleEmp ={ employee_name: '',employee_age: '',employee_salary: '',id:'' };
  }

  onDeleteItem(id)
  {
    $('#Loader').show();
    this.service.deleteEmployee(id).subscribe((data)=>{
          console.log("success"+JSON.stringify(data));
          this.employeelist();
          $('#Loader').hide();
    });
  }

  employeelist()
  {
    this.service.employeeList().subscribe(
      data=>{
        $('#Loader').hide();
        this.emp=data;
        this.emp.sort((a, b) => {
          return b.id - a.id;
        });
        //console.log(this.emp);
    });
  }

  addemployee(id)
  {
    if (this.formdata.valid) {
        console.log(this.formdata.value);
        console.log('Iddddd : '+id);
        $('#Loader').show();
      if(id)
      {
        // For Update Record
        this.service.updateEmployee(this.formdata.value,id).subscribe((data)=>{
          console.log("Add Emp"+JSON.stringify(data));
          this.formdata.reset()
          $("#addModal").modal("hide");
          this.employeelist();
          
        });

      }else{
        // For Save Record
        this.service.addEmployee(this.formdata.value).subscribe((data)=>{
          console.log("Add Emp"+JSON.stringify(data));
          this.formdata.reset()
          $("#addModal").modal("hide");
          this.employeelist();

        });
      }
    }
  }

  onUpdateItem(id)
  {
    this.service.getEmpRecord(id).subscribe((data)=>{
      console.log("Get Emp Record"+JSON.stringify(data));
      this.isSingleEmp=true;
      this.singleEmp=data;
      $("#addModal").modal("show");
    });
  }

  modelClose()
  {
    $("#addModal").modal("hide");
    this.formdata.reset();
  }

}
