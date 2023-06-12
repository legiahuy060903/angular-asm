import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, Staff } from 'src/app/project';
import { DataService } from 'src/app/services/datasevice-service.service';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit, OnDestroy {
  sub: any;
  pj: Project | undefined;
  ListStaff: Staff[] = [];
  staffInProject: Staff[] = [];
  constructor(private route: ActivatedRoute, private d: DataService, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.d.getIdProjects(id).subscribe((data: Project | undefined) => this.pj = data);
    });
    this.d.getStaffs('');
    this.sub = this.d.getDataStaffsSubject().subscribe((data: Staff[]) => {
      this.ListStaff = data;
    });

  }
  ngDoCheck() {
    this.staffInProject = this.ListStaff.filter(item => {
      return this.pj?.member.includes(item.id)
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
