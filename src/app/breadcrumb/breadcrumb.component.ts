import { Component } from '@angular/core';
import { Breadcrumb } from '../project';
import { Observable } from 'rxjs/internal/Observable';
import { MyserviceServiceService } from '../services/myservice-service.service';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private readonly breadcrumbService: MyserviceServiceService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }
}
