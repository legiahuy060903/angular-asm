import { Component, OnInit } from '@angular/core';
import { Staff } from '../project';
import { DataService } from '../services/datasevice-service.service';
@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent {

  ListStaff: Staff[] = []


  constructor(private d: DataService) {
    this.getData();
  }
  ngOnInit(): void {
  }
  sort: string = '';
  keyword: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    this.getData();
  }
  getData() {
    this.d.getStaffs(this.sort).subscribe((data: Staff[]) => this.ListStaff = data);
  }
  changeKey() {
    const kw: string = this.keyword.toLowerCase();
    if (kw) {
      this.d.getStaffs(`?q=${kw}`).subscribe((data: Staff[]) => this.ListStaff = data);
    } else {
      this.getData()
    }
  }
}
