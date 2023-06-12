import { Component } from '@angular/core';
import { Project, Staff, Task } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent {
  listTask: Task[] = [];
  ListStaff: Staff[] = [];
  listProject: Project[] = [];
  visible!: boolean;
  submitted = false;
  formEditTask!: FormGroup;
  constructor(private d: DataService, private _fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) {

  }
  ngOnInit(): void {
    this.getData();
    this.formEditTask = this._fb.group({
      id: ['', Validators.required],
      nameTask: ['', Validators.required],
      description: ['', Validators.required],
      idProject: ['', Validators.required],
      member: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  sort: string = '';
  keyword: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    this.getData();
  }
  getData() {
    this.d.getTasks(this.sort).subscribe((data: Task[]) => this.listTask = data);
    this.d.getStaffs(this.sort);
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });

    this.d.getProjects(this.sort).subscribe(
      (data: Project[]) => this.listProject = data
    );
  }
  changeKey() {
    const kw: string = this.keyword.toLowerCase();
    if (kw) {
      this.d.getTasks(`?q=${kw}`).subscribe((data: Task[]) => this.listTask = data);
    } else {
      this.getData();
    }
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Cập nhật công việcthành công' });
  }
  showDialog(id: number) {
    this.visible = true;
    const cv = this.listTask.find(item => item.id === id);
    this.formEditTask.setValue({
      id: cv?.id,
      nameTask: cv?.nameTask,
      description: cv?.description,
      idProject: cv?.idProject,
      member: cv?.member,
      priority: cv?.priority,
      status: cv?.status
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.formEditTask.invalid) {
      console.log('fail');
      return;
    } else {
      const { id, ...data } = this.formEditTask.value;
      this.d.editTask(id, data).subscribe(() => {
        this.showSuccess();
        this.onReset();
        this.getData();
        this.visible = false;
      })
    }
  }
  getId(id: number) {
    const kq = this.listProject.find(item => item.id === id);
    return kq?.nameProject;
  }
  onReset(): void {
    this.submitted = false;
    this.formEditTask = this._fb.group({
      id: ['', Validators.required],
      nameTask: ['', Validators.required],
      description: ['', Validators.required],
      idProject: ['', Validators.required],
      member: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    })
  }
  get f() { return this.formEditTask.controls }
  confirm2(id: number) {
    this.confirmationService.confirm({
      message: `Bạn muốn xóa công việc có id là : ${id} không ?`,
      header: 'Xác nhận lại !',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.d.delTask(id).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Xóa công việc thành công' });
          this.getData();
        });

      },
      reject: () => {
        return false
      }
    });
  }
}