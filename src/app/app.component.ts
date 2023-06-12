import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd, NavigationStart } from '@angular/router';

import { Observable } from 'rxjs';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {

  }
}