import { Component, OnInit } from '@angular/core';

import {MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-propertypage',
  templateUrl: './propertypage.component.html',
  styleUrls: ['./propertypage.component.css']
})
export class PropertypageComponent implements OnInit {

  constructor(public Myservice:MyserviceService) { }

  ngOnInit() {

    this.Myservice.users().subscribe(data=>{
        console.log('data : '+JSON.stringify(data));
    });

  }

}
