export interface Project {
    id: number;
    nameProject: string;
    startDay: string;
    money: number;
    leader: number;
    member: number[];
}
export interface Staff {
    id: number;
    firstName: string;
    lastName: string;
    ns: string;
    gender: boolean;
    area: string;
    status: string;
}
export interface Task {
    id: number;
    nameTask: string;
    description: string;
    idProject: number;
    member: number[];
    priority: number;
    status: number;
}
export interface Breadcrumb {
    label: string;
    url: string;
}