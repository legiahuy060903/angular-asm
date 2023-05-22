import { Component } from '@angular/core';
import { Task } from '../project';
import { DataService } from '../services/datasevice-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  listTask: Task[] = [];

  constructor(private d: DataService) {

  }
  ngOnInit(): void {
    this.getData();
  }
  sort: string = '';
  keyword: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    this.getData();
  }
  getData() {
    this.d.getTasks(this.sort).subscribe((data: Task[]) => this.listTask = data);
  }
  changeKey() {
    const kw: string = this.keyword.toLowerCase();
    if (kw) {
      this.d.getTasks(`?q=${kw}`).subscribe((data: Task[]) => this.listTask = data);
    } else {
      this.getData()
    }
  }
}