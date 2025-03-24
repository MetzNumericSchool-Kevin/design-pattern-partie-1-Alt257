import {IDepartment} from "./IDepartment";

export class Department implements IDepartment {
    get name(): string {
        return this._name;
    }
    constructor(
        private _name: string,
        private subDepartmentList: IDepartment[]
    ) {    }

    public countEmployees(): number {
        let totalEmployees = 0;
        this.subDepartmentList.forEach(
            subDepartment =>
                totalEmployees += subDepartment.countEmployees()
        );
        return totalEmployees;  //@TODO: refact - search for 'reduce' fn
    }
}