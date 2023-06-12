import { Component, OnInit } from '@angular/core';
import { Project, Staff, Task } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
@Component({
  selector: 'app-control-left',
  templateUrl: './control-left.component.html',
  styleUrls: ['./control-left.component.css']
})
export class ControlLeftComponent implements OnInit {
  sidebarVisible: boolean = true;
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
    this.d.getStaffs('');
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });
    this.d.getTasks('').subscribe((data: Task[]) => this.ListTask = data);
  }

  ngDoCheck() {
    console.log(this.ListStaff.length);
    this.countStaff = this.ListStaff.length;
    this.totalPriceProject = this.ListProject.reduce((a, b) => a + b.money, 0);
    this.status = this.ListTask.filter((a) => a.status === 1).length;
  }

}
