import { Component } from '@angular/core';
import { Staff } from '../project';
import { DataService } from '../services/datasevice-service.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  ListStaff: Staff[] = [];
  sort: string = ''
  constructor(private d: DataService) { }
  ngOnInit(): void {
    this.d.getStaffs(this.sort).subscribe(
      (data: Staff[]) => this.ListStaff = data
    );
  }
}
