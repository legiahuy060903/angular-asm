import { Component } from '@angular/core';
import { DataService } from '../../services/datasevice-service.service';
import { Project } from '../../project';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tk: string = '';
  constructor(private d: DataService, private router: Router) {

  }
  sb() {
    this.router.navigate(['/', 'project']);
    this.d.search.next(this.tk);
  }
}
