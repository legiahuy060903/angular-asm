import { Component, OnInit, SimpleChanges, Pipe, PipeTransform } from '@angular/core';
import { Project, Staff, Task } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
@Component({
  selector: 'app-control-left',
  templateUrl: './control-left.component.html',
  styleUrls: ['./control-left.component.css']
})
export class ControlLeftComponent implements OnInit {
  ListProject: Project[] = [];
  ListStaff: Staff[] = [];
  ListTask: Task[] = [];
  countStaff: number | undefined;
  totalPriceProject: number | undefined;
  status: number | undefined;
  ListKH: any[] = [{
    id: 1,
    name: "Lê Gia Huy"
  },
  {
    id: 2,
    name: "Lê Công Thành Tài"
  },
  {
    id: 3,
    name: "Phạm Hoàng Huy"
  }]
  constructor(private d: DataService) {

  }
  ngOnInit(): void {
    this.d.getProjects('').subscribe((data: Project[]) => this.ListProject = data);
    this.d.getStaffs('').subscribe((data: Staff[]) => this.ListStaff = data);
    this.d.getTasks('').subscribe((data: Task[]) => this.ListTask = data);
  }

  ngDoCheck() {
    this.countStaff = this.ListStaff.length;
    this.totalPriceProject = this.ListProject.reduce((a, b) => a + b.money, 0);
    this.status = this.ListTask.filter((a, b) => a.status === 0).length;
  }

}
