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

    constructor(private res: HttpClient) { }

    getStaffs(query: string): Observable<Staff[]> {
        return this.res.get<Staff[]>(`http://localhost:3000/ListStaff${query}`).pipe(
            tap(data => console.log(data)),
            catchError(e => of([]))
        )
    }
    getProjects(query: string): Observable<Project[]> {
        return this.res.get<Project[]>(`http://localhost:3000/ListProject${query}`).pipe(
            tap(data => console.log(data)),
            catchError(e => of([]))
        )
    }
    getTasks(query: string): Observable<Task[]> {
        return this.res.get<Task[]>(`http://localhost:3000/ListTask${query}`).pipe(
            tap(data => console.log(data)),
            catchError(e => of([]))
        )
    }
    getIdProjects(id: number): any {
        return this.res.get<Project | undefined>(`http://localhost:3000/ListProject/${id}`);
    }


}
