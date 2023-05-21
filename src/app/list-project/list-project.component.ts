import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../project';
import { DataService } from '../services/datasevice-service.service';
import { Observable, of, Subject, debounceTime, distinctUntilChanged, switchMap, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit, OnDestroy {
  private _sub = new Subscription();
  constructor(private d: DataService) {

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
  keywordHeader: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    console.log(value);
    this.getData();
  }
  getData() {
    this.d.getProjects(this.sort).subscribe((data: Project[]) => this.listProject = data);
  }

  ngOnInit(): void {
    this.getData();
    this.listProjectEx = this.listProject;
    const kq: BehaviorSubject<string> = this.d.search
    if (kq) {
      this._sub = this.d.search.subscribe((val: any) => {
        this.d.getProjects(`?q=${val}`).subscribe((data: Project[]) => this.listProject = data);
      })
    }
  }
  changeKey() {
    this.listProject = this.listProjectEx.filter(p => p.nameProject.toLowerCase().includes(this.keyword.toLowerCase()));
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
