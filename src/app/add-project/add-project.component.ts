import { Component } from '@angular/core';
import { Staff } from '../project';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/datasevice-service.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  ListStaff: Staff[] = [];
  sort: string = '';
  formAddProject!: FormGroup;
  submitted = false;
  constructor(private d: DataService, private _fb: FormBuilder) { }
  ngOnInit(): void {
    this.d.getStaffs(this.sort).subscribe(
      (data: Staff[]) => this.ListStaff = data
    );
    this.formAddProject = this._fb.group({
      nameProject: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', Validators.required],
      leader: ['', Validators.required],
      staff: ['', Validators.required],
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
    }
  }
  onReset(): void {
    this.submitted = false;
    this.formAddProject.reset();
  }
}
