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
  staffByArea: Staff[] = [];
  handle(value: any) {
    const data = value.map((item: any) => item)
    return data
  }
  // bac: Staff[] = [];
  // trung: Staff[] = [];
  // nam: Staff[] = [];
  constructor(private d: DataService) {
    this.d.getStaffs('').subscribe((data: Staff[]) => {
      this.ListStaff = data;
      this.staffByArea = data.reduce((acc: any, item: any) => {
        if (!acc[item.area]) {
          acc[item.area] = [];
        }
        acc[item.area].push(item);
        return acc;
      }, []);

    });

  }

  ngDoCheck() {
    // this.staffByArea = this.ListStaff.reduce((acc: any, item: any) => {
    //   if (!acc[item.area]) {
    //     acc[item.area] = [];
    //   }
    //   acc[item.area].push(item);
    //   return acc;
    // }, []);
    // console.log(this.staffByArea);
    //   // this.bac = this.ListStaff.filter(item => item.area === 'Bắc');
    //   // this.trung = this.ListStaff.filter(item => item.area === 'Trung');
    //   // this.nam = this.ListStaff.filter(item => item.area === 'Nam');
  }
}
