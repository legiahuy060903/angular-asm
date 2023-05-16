import { Component } from '@angular/core';
import { Task } from '../project';
import { DataService } from '../services/datasevice-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent {
  listTask: Task[] = [
    { id: 1, nameTask: 'Phân tích yêu cầu', idProject: 1, idStaff: 1, description: "Phân tích các yêu cầu của khách hàng để team thực hiện", status: 0, priority: 1 },
    { id: 2, nameTask: 'Thực hiện layout cho ứng dụng', idProject: 1, idStaff: 2, description: "Thực hiện layout website, chú ý kỹ responsive", status: 0, priority: 1 },
    { id: 3, nameTask: 'Tìm hiểu yêu cầu của khách hàng', idProject: 2, idStaff: 3, description: "Đến công ty và ghi nhận các yêu cầu của khách hàng", status: 0, priority: 2 },
    { id: 4, nameTask: 'Đăng ký thành viên', idProject: 3, idStaff: 4, description: "Thực hiện chức năng đăng ký, có capcha, mail kích hoạt", status: 0, priority: 1 },
    { id: 5, nameTask: 'Đổi pass, quên pass', idProject: 1, idStaff: 4, description: "Thực hiện chức năng đỗi pass, quên pass. Nhớ kiểm tra user login, email tồn tại, pass cũ hợp lệ ", status: 0, priority: 1 },
    { id: 6, nameTask: 'Testing 1', idProject: 4, idStaff: 3, description: "Kiểm tra mọi form chức năng theo các case đã liệt kê", status: 0, priority: 2 },
    { id: 7, nameTask: 'Triển khai website', idProject: 5, idStaff: 4, description: "Triển khai website lên hosting đã mua", status: 0, priority: 2 },
    { id: 8, nameTask: 'Hướng dẫn sử dụng và bàn giao', idProject: 5, idStaff: 1, description: "Hướng dẫn sử dụng cho khách hàng", status: 0, priority: 2 },

  ]
  constructor(private d: DataService) {

  }
  ngOnInit(): void {
    this.listTaskEx = this.listTask;
  }
  listTaskEx: Task[] = [];
  sort: string = '';
  keyword: string = '';
  getSelectedValue(value: string) {
    this.sort = value;
    this.getData();
  }
  getData() {
    this.d.getTasks(this.sort).subscribe((data: Task[]) => this.listTask = data);
  }
  changeKey() {
    this.listTask = this.listTaskEx.filter(p => p.nameTask.toLowerCase().includes(this.keyword.toLowerCase()));
  }
}