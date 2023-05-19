import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Project, Staff } from '../project';
import { DataService } from '../services/datasevice-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  ListStaff: Staff[] = [];
  listProject: Project[] = [];
  sort: string = '';
  formAddTask!: FormGroup;
  submitted = false;
  constructor(private d: DataService, private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.d.getStaffs(this.sort).subscribe(
      (data: Staff[]) => this.ListStaff = data
    );
    this.d.getProjects(this.sort).subscribe(
      (data: Project[]) => this.listProject = data
    );
    this.formAddTask = this._fb.group({
      nameTask: ['', Validators.required],
      des: ['', [Validators.required, Validators.minLength(20)]],
      project: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      staff: ['', Validators.required],
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
    }
  }
  onReset(): void {
    this.submitted = false;
    this.formAddTask.reset();
  }

}

