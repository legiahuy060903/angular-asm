import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Staff, Project, Task } from '../project';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private res: HttpClient) { }
    getStaffs(query: string): any {
        return this.res.get<Staff[] | undefined>(`http://localhost:3000/ListStaff${query}`);
    }
    getProjects(query: string): any {
        return this.res.get<Project[] | undefined>(`http://localhost:3000/ListProject${query}`);
    }
    getTasks(query: string): any {
        return this.res.get<Task[] | undefined>(`http://localhost:3000/ListTask${query}`);
    }
    getIdProjects(id: number): any {
        return this.res.get<Project | undefined>(`http://localhost:3000/ListProject/${id}`);

    }

}
