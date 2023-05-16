import { Component, OnInit } from '@angular/core';
import { Staff } from '../project';
import { DataService } from '../services/datasevice-service.service';
@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent {

  ListStaff: Staff[] = [
    {
      id: 1,
      firstName: "Lê",
      lastName: "Huy",
      ns: "2003-03-03",
      gender: false,
      area: "Bắc",
      status: "Bận"
    },
    {
      id: 2,
      firstName: "Lê",
      lastName: "Tài",
      ns: "2003-01-33",
      gender: true,
      area: "Bắc",
      status: "Bận"
    },
    {
      id: 4,
      firstName: "Lê",
      lastName: "Huy",
      ns: "2003-06-06",
      gender: false,
      area: "Trung",
      status: "Trống"
    },
    {
      id: 6,
      firstName: "Phú",
      lastName: "Đại",
      ns: "2003-09-03",
      gender: true,
      area: "Nam",
      status: "Trống"
    },
    {
      id: 7,
      firstName: "Nam",
      lastName: "Lê",
      ns: "2003-09-03",
      gender: true,
      area: "Nam",
      status: "Bận"
    },
    {
      id: 8,
      firstName: "Trần",
      lastName: "Trung",
      ns: "2003-09-03",
      gender: true,
      area: "Trung",
      status: "Bận"
    }
  ]
  constructor(private d: DataService) {
    this.getData();
  }
  ngOnInit(): void {
    this.ListStaffEx = this.ListStaff;
  }
  ListStaffEx: Staff[] = [];
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
    this.ListStaff = this.ListStaffEx.filter(p => {
      let fullName = p.firstName + " " + p.lastName;
      return fullName.toLowerCase().includes(this.keyword.toLowerCase())
    });
  }
}
