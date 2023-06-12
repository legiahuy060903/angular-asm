import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Staff, Project, Task } from '../project';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    public search = new BehaviorSubject<string>("");
    private dataStaffsSubject: BehaviorSubject<Staff[]> = new BehaviorSubject<Staff[]>([]);
    constructor(private res: HttpClient) { }
    // nhanvien
    getStaffs(query: string) {
        this.res.get<Staff[]>(`http://localhost:3000/ListStaff${query}`).subscribe((data) => {
            this.dataStaffsSubject.next(data);
        });
    }
    getDataStaffsSubject() {
        return this.dataStaffsSubject.asObservable();
    }
    createStaffs(data: any): Observable<void> {
        return this.res.post<void>(`http://localhost:3000/ListStaff`, data)
    }
    editStaffs(id: number, data: any): Observable<any> {
        return this.res.put(`http://localhost:3000/ListStaff/${id}`, data);
    }
    delStaffs(id: number): Observable<void> {
        return this.res.delete<void>(`http://localhost:3000/ListStaff/${id}`);
    }

    // du an
    getProjects(query: string): Observable<Project[]> {
        return this.res.get<Project[]>(`http://localhost:3000/ListProject${query}`);
    }
    getIdProjects(id: number): any {
        return this.res.get<Project | undefined>(`http://localhost:3000/ListProject/${id}`);
    }
    createProject(data: any): any {
        return this.res.post(`http://localhost:3000/ListProject`, data);
    }
    editProject(id: number, data: any): Observable<any> {
        console.log(id, data);
        return this.res.put(`http://localhost:3000/ListProject/${id}`, data);
    }
    delProject(id: number): Observable<void> {
        return this.res.delete<void>(`http://localhost:3000/ListProject/${id}`);
    }
    //cong viec
    getTasks(query: string): Observable<Task[]> {
        return this.res.get<Task[]>(`http://localhost:3000/ListTask${query}`);
    }
    createTask(data: any): any {
        return this.res.post(`http://localhost:3000/ListTask`, data);
    }
    editTask(id: number, data: any): Observable<any> {
        console.log(id, data);
        return this.res.put(`http://localhost:3000/ListTask/${id}`, data);
    }
    delTask(id: number): Observable<void> {
        return this.res.delete<void>(`http://localhost:3000/ListTask/${id}`);
    }
}
