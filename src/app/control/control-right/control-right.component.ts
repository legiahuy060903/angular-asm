import { Component, OnInit, SimpleChanges, Pipe, PipeTransform } from '@angular/core';
import { Project, Staff, Task } from '../../project';
import { DataService } from '../../services/datasevice-service.service';

@Component({
  selector: 'app-control-right',
  templateUrl: './control-right.component.html',
  styleUrls: ['./control-right.component.css']
})
export class ControlRightComponent {
  ListStaff: Staff[] = [];
  bac: Staff[] = [];
  trung: Staff[] = [];
  nam: Staff[] = [];
  constructor(private d: DataService) {
    this.d.getStaffs('').subscribe((data: Staff[]) => this.ListStaff = data);

  }

  ngDoCheck() {
    this.bac = this.ListStaff.filter(item => item.area === 'Bắc');
    this.trung = this.ListStaff.filter(item => item.area === 'Trung');
    this.nam = this.ListStaff.filter(item => item.area === 'Nam');
  }
}
