import { Component, OnInit } from '@angular/core';
import { Staff } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

import * as moment from 'moment';
@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css'],
})
export class ListStaffComponent {

  ListStaff: Staff[] = []

  visible!: boolean;
  submitted = false;
  formEditStaff!: FormGroup;
  constructor(private d: DataService, private _fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) {
    this.getData();
  }
  ngOnInit(): void {
    this.formEditStaff = this._fb.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      ns: ['', Validators.required],
      gender: ['', Validators.required],
      area: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  showDialog(id: number) {
    this.visible = true;
    const nv = this.ListStaff.find(item => item.id === id);
    this.formEditStaff.setValue({
      id: nv?.id,
      firstName: nv?.firstName,
      lastName: nv?.lastName,
      ns: moment(nv?.ns).format('YYYY-MM-DD'),
      gender: nv?.gender,
      area: nv?.area,
      status: nv?.status,
    });
  }

  onReset(): void {
    this.submitted = false;
    this.formEditStaff = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      ns: ['', Validators.required],
      gender: ['', Validators.required],
      area: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cập nhật nhân viên thành công' });
  }
  get f() { return this.formEditStaff.controls }

  sort: string = '';
  keyword: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    this.getData();
  }
  getData() {
    this.d.getStaffs(this.sort);
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });
  }
  changeKey() {
    const kw: string = this.keyword.toLowerCase();
    if (kw) {
      this.d.getStaffs(`?q=${kw}`);
      this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
        this.ListStaff = data;
      });
    } else {
      this.getData()
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.formEditStaff.invalid) {
      console.log('fail');
      return;
    } else {
      const { id, ...data } = this.formEditStaff.value;
      this.d.editStaffs(id, data).subscribe(() => {
        this.showSuccess();
        this.onReset();
        this.getData();
        this.visible = false;
      })
    }
  }
  confirm2(id: number) {
    this.confirmationService.confirm({
      message: `Bạn muốn xóa nhân viên có id là : ${id} không ?`,
      header: 'Xác nhận lại !',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.d.delStaffs(id).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Xóa nhân viên thành công' });
          this.getData();
        });

      },
      reject: () => {
        return false
      }
    });
  }
}
