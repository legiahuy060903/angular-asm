import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: 'vnd' })
export class VndPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)
    }
}
@Pipe({ name: 'gender' })
export class GenderPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value ? "Nam" : "Nữ";
    }
}
@Pipe({ name: 'priority' })
export class PriorityPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (value === 1) {
            return `Thấp`
        } else if (value === 2) {
            return `Trung bình`
        } else {
            return `Cao`
        }
    }
}