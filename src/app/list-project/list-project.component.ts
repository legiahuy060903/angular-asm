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


  listProject: Project[] = []


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
    const kw: string = this.keyword.toLowerCase();
    if (kw) {
      this.d.getProjects(`?q=${kw}`).subscribe((data: Project[]) => this.listProject = data);
    } else {
      this.getData()
    }
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
