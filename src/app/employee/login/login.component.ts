import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth-service.service';
import { DataService } from 'src/app/services/datasevice-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private d: DataService, private messageService: MessageService, private auth: AuthService, private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
  }
  email!: string;
  password!: string;

  onSubmit() {
    if (this.email?.length > 0 && this.password?.length > 0) {
      this.auth.login(this.email, this.password).subscribe(
        (res: any) => {
          const { accessToken, expiresIn, ...data } = JSON.parse(res);
          if (res) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('account', JSON.stringify(data.account));
            const expiresAt = moment().add(expiresIn, 'second');
            localStorage.setItem('expiresIn', JSON.stringify(expiresAt.valueOf()));
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/leader/project';
            this.router.navigateByUrl(returnUrl);
          }
        }, (error: HttpErrorResponse) => {
          const { message } = JSON.parse(error.error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
        });
    }
  }

}
