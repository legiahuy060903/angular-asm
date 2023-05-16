import { Component } from '@angular/core';

import { Project, Staff } from '../project';
import { DataService } from '../services/datasevice-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  ListStaff: Staff[] = [];
  listProject: Project[] = [];
  sort: string = ''
  constructor(private d: DataService) { }
  ngOnInit(): void {
    this.d.getStaffs(this.sort).subscribe(
      (data: Staff[]) => this.ListStaff = data
    );
    this.d.getProjects(this.sort).subscribe(
      (data: Project[]) => this.listProject = data
    );
  }

}
