import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../project';
import { DataService } from '../services/datasevice-service.service';
@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  constructor(private d: DataService) {
    this.getData();
  }

  listProject: Project[] = [
    {
      id: 1,
      nameProject: "Quản lí trại heo",
      startDay: "2202-09-01",
      money: 12223,
      leader: 1,
      member: [
        1,
        2,
        3
      ]
    },
    {
      id: 2,
      nameProject: "Công viên cây xanh",
      startDay: "2202-02-01",
      money: 99991,
      leader: 1,
      member: [
        1,
        2,
        4
      ]
    },
    {
      id: 3,
      nameProject: "Tiến lên miền nam",
      startDay: "2202-06-01",
      money: 98888,
      leader: 1,
      member: [
        1,
        3
      ]
    },
    {
      id: 4,
      nameProject: "Tiến lên miền bắc",
      startDay: "2202-01-01",
      money: 77777,
      leader: 1,
      member: [
        1,
        3,
        4,
        5
      ]
    }
  ]
  listProjectEx: Project[] = [];
  sort: string = '';
  keyword: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    console.log(value);
    this.getData();

  }
  getData() {
    this.d.getProjects(this.sort).subscribe((data: Project[]) => this.listProject = data);
  }

  ngOnInit(): void {
    this.listProjectEx = this.listProject
  }

  changeKey() {
    this.listProject = this.listProjectEx.filter(p => p.nameProject.toLowerCase().includes(this.keyword.toLowerCase()));

  }
}
