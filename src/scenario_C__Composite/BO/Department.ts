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
        return this.subDepartmentList.reduce(
            (accumulator, currentDep) =>
                accumulator + currentDep.countEmployees(),
            0
        );
    }
}