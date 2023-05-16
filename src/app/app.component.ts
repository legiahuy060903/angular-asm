import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
// import { BreadcrumbService } from './services/myservice-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  namePath: string = '';
  constructor(router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        this.namePath = val.url.charAt(1).toLocaleUpperCase() + val.url.slice(2)
      }
    });
  }
}