import { Component, OnInit, SimpleChanges, Pipe, PipeTransform } from '@angular/core';
import { Project, Staff, Task } from '../project';
import { DataService } from '../services/datasevice-service.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    ListStaff: Staff[] = [];
    bac: Staff[] = [];
    trung: Staff[] = [];
    nam: Staff[] = [];
    listProject: Project[] = [];
    money: number = 0
    constructor(private d: DataService) {
        this.d.getStaffs('').subscribe((data: Staff[]) => this.ListStaff = data);
        this.d.getProjects('').subscribe((data: Project[]) => this.listProject = data);
    }

    ngDoCheck() {
        this.money = this.listProject[0]?.money
        this.bac = this.ListStaff.filter(item => item.area === 'Bắc');
        this.trung = this.ListStaff.filter(item => item.area === 'Trung');
        this.nam = this.ListStaff.filter(item => item.area === 'Nam');
    }

}