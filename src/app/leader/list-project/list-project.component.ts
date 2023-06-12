import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Project, Staff } from '../../project';
import { DataService } from '../../services/datasevice-service.service';
import { Observable, of, Subject, debounceTime, distinctUntilChanged, switchMap, BehaviorSubject, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit, OnDestroy {
  private _sub = new Subscription();
  visible!: boolean;
  submitted = false;
  formEditProject!: FormGroup;
  constructor(private d: DataService, private _fb: FormBuilder, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }
  listProject: Project[] = []
  listProjectEx: Project[] = [];
  sort: string = '';
  keyword: string = '';
  keywordHeader: string = '';
  ListStaff: Staff[] = [];
  getSelectedValue(value: string) {
    this.sort = value;
    console.log(value);
    this.getData();
  }
  getData() {
    this.d.getProjects(this.sort).subscribe((data: Project[]) => this.listProject = data);
  }

  ngOnInit(): void {
    this.getData();
    this.listProjectEx = this.listProject;
    const kq: BehaviorSubject<string> = this.d.search
    if (kq) {
      this._sub = this.d.search.subscribe((val: any) => {
        this.d.getProjects(`?q=${val}`).subscribe((data: Project[]) => this.listProject = data);
      })
    }

    this.d.getStaffs(this.sort);
    this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });

    this.formEditProject = this._fb.group({
      id: ['', Validators.required],
      nameProject: ['', Validators.required],
      startDay: ['', Validators.required],
      money: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      leader: ['', Validators.required],
      member: ['', Validators.required],
    })

  }
  get f() { return this.formEditProject.controls; }
  changeKey() {
    const kw: string = this.keyword.toLowerCase();
    if (kw) {
      this.d.getProjects(`?q=${kw}`).subscribe((data: Project[]) => this.listProject = data);
    } else {
      this.getData()
    }
  }
  showDialog(id: number) {
    this.visible = true;
    console.log(id);
    const da = this.listProject.find(item => item.id === id);
    this.formEditProject.setValue({
      id: da?.id,
      nameProject: da?.nameProject,
      startDay: moment(da?.startDay).format('YYYY-MM-DD'),
      money: da?.money,
      leader: da?.leader,
      member: da?.member
    });
  }
  confirm2(id: number) {
    this.confirmationService.confirm({
      message: `Bạn muốn xóa dự án có id là : ${id} không ?`,
      header: 'Xác nhận lại !',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.d.delProject(id).subscribe(() => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Xóa dự án thành công' });
          this.getData();
        });

      },
      reject: () => {
        return false
      }
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.formEditProject.invalid) {
      console.log('fail');
      return;
    } else {
      console.log(JSON.stringify(this.formEditProject.value));
      const { id, ...data } = this.formEditProject.value;
      this.d.editProject(id, data).subscribe(() => {
        this.showSuccess();
        this.onReset();
        this.getData();
        this.visible = false;
      })
    }
  }
  onReset(): void {
    this.submitted = false;
    this.formEditProject = this._fb.group({
      id: ['', Validators.required],
      nameProject: ['', Validators.required],
      startDay: ['', Validators.required],
      money: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      leader: ['', Validators.required],
      member: ['', Validators.required],
    })
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Câp nhật thành công' });
  }
  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
