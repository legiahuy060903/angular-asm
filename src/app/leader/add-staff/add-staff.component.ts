import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project, Staff } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription, catchError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css'],
})
export class AddStaffComponent implements OnInit {
  private createStaffSubscription!: Subscription;
  ListStaff: Staff[] = [];
  listProject: Project[] = [];

  sort: string = '';
  formAddStaff!: FormGroup;
  submitted = false;
  constructor(private router: Router, private d: DataService, private _fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getData();


    this.formAddStaff = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      ns: ['', Validators.required],
      gender: ['', Validators.required],
      area: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  getData() {
    this.d.getStaffs(this.sort);
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });
    this.d.getProjects(this.sort).subscribe(
      (data: Project[]) => this.listProject = data
    );
  }
  get f() { return this.formAddStaff.controls }

  onSubmit() {
    this.submitted = true;
    if (this.formAddStaff.invalid) {
      console.log('fail');
      return;
    } else {
      this.d.createStaffs(this.formAddStaff.value).subscribe(() => {
        this.getData();
        this.showSuccess();
        this.onReset();
        this.router.navigate(['/staff']);
      });

    }
  }
  onReset(): void {
    this.submitted = false;
    this.formAddStaff = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      ns: ['', Validators.required],
      gender: ['', Validators.required],
      area: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thêm nhân viên thành công' });
  }
  // ngOnDestroy() {
  //   if (this.createStaffSubscription) {
  //     this.createStaffSubscription.unsubscribe();
  //   }
  // }
}
