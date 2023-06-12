import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project, Staff } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  ListStaff: Staff[] = [];
  listProject: Project[] = [];
  sort: string = '';
  formAddTask!: FormGroup;
  submitted = false;
  constructor(private router: Router, private d: DataService, private _fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }
  ngOnInit(): void {
    this.d.getStaffs(this.sort);
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });
    this.d.getProjects(this.sort).subscribe(
      (data: Project[]) => this.listProject = data
    );
    this.formAddTask = this._fb.group({
      nameTask: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      idProject: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      member: ['', Validators.required],
    })
  }
  get f() { return this.formAddTask.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.formAddTask.invalid) {
      console.log('fail');
      return;
    } else {
      console.log(JSON.stringify(this.formAddTask.value));
      this.d.createTask(this.formAddTask.value).subscribe(() => {
        this.showSuccess();
        this.onReset();
        this.router.navigate(['/task']);
      })
    }
  }
  onReset(): void {
    this.submitted = false;
    this.formAddTask = this._fb.group({
      nameTask: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      idProject: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      member: ['', Validators.required],
    })
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thêm nhân viên thành công' });
  }
}

