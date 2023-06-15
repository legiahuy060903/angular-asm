import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataService } from 'src/app/services/datasevice-service.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent {
  passCurrent!: string;
  passNew!: string;
  constructor(private router: Router, private d: DataService, private messageService: MessageService, private auth: AuthService
  ) { }
  onSubmit() {
    if (this.passCurrent?.length > 0 && this.passNew?.length > 0) {
      const { _id, ...data } = JSON.parse(localStorage.getItem("account")!);
      this.auth.changePass(_id, this.passCurrent, this.passNew).subscribe(
        (res: any) => {
          if (res) {
            const { message } = JSON.parse(res);
            this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: message });
            this.passCurrent = '';
            this.passNew = '';
          }
        }, (error: HttpErrorResponse) => {
          const { message } = JSON.parse(error.error);
          this.messageService.add({ severity: 'info', summary: 'Thông báo', detail: message });
        });
    }
  }
}
