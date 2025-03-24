import {IDepartment} from "./IDepartment";

export class SubDepartment implements IDepartment{
    get name(): string {
        return this._name;
    }
    constructor(
        private _name: string,
        private numberOfEmployees: number,
    ) {
    }
    public countEmployees(): number {
        return this.numberOfEmployees;
    }
}