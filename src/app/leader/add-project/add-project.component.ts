import { Component } from '@angular/core';
import { Staff } from '../../project';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/datasevice-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent {
  ListStaff: Staff[] = [];
  sort: string = '';
  formAddProject!: FormGroup;
  submitted = false;
  constructor(private router: Router, private d: DataService, private _fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }
  ngOnInit(): void {
    this.d.getStaffs(this.sort);
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });
    this.formAddProject = this._fb.group({
      nameProject: ['', Validators.required],
      startDay: ['', Validators.required],
      money: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      leader: ['', Validators.required],
      member: ['', Validators.required],
    })
  }
  get f() { return this.formAddProject.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.formAddProject.invalid) {
      console.log('fail');
      return;
    } else {
      console.log(JSON.stringify(this.formAddProject.value));
      this.d.createProject(this.formAddProject.value).subscribe(() => {
        this.showSuccess();
        this.onReset();
        this.router.navigate(['/project']);

      })
    }
  }
  onReset(): void {
    this.submitted = false;
    this.formAddProject = this._fb.group({
      nameProject: ['', Validators.required],
      startDay: ['', Validators.required],
      money: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      leader: ['', Validators.required],
      member: ['', Validators.required],
    })
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thêm nhân viên thành công' });
  }
}
