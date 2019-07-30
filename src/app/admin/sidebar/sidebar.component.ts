import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router,private bnIdle: BnNgIdleService) {
    // After Idle Time 5 min logout automatically
      this.bnIdle.startWatching(300).subscribe((res) => {
        if(res) {
           // alert("session expired");
            this.logoutAdmin();
        }
      })
   }

  ngOnInit() {
  }

  logoutAdmin()
  {
    // remove user from local storage to log user out
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    this.router.navigate(['/']);
  }

}
