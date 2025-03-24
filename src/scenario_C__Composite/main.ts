import {Department} from "./BO/Department";
import {SubDepartment} from "./BO/SubDepartment";
import {IDepartment} from "./BO/IDepartment";

const secretDep = new SubDepartment('Secrétariat général', 12);
const techDepartment = new Department('Département technique', [
    new SubDepartment('IT', 15),
    new SubDepartment('Web', 7),
]);
const commDepartment = new Department('Département co;;erciql', [
    new SubDepartment('Ventes', 8),
    new SubDepartment('Achats', 2),
]);
const brousoufDep = new Department('Département financier', [
    new SubDepartment('RH', 2),
    new SubDepartment('Comptabilité', 7),
    new SubDepartment('Administration', 11),
]);

const directionGenerale = new Department('Direction Générale',[
    secretDep,
    techDepartment,
    commDepartment,
    brousoufDep,
]);

function printDepartmentEmployees(department: IDepartment) {
    console.log('Nombre total d\'employés du département ['
        + department.name + ']: '
        + department.countEmployees());
}

printDepartmentEmployees(directionGenerale);
printDepartmentEmployees(secretDep);
printDepartmentEmployees(techDepartment);
printDepartmentEmployees(commDepartment);
printDepartmentEmployees(brousoufDep);


