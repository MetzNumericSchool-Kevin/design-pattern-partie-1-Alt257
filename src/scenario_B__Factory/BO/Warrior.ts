import {ICharacter} from "./ICharacter";

export class Warrior implements ICharacter {
    public attack(): void {
        console.log('Le guerrier frappe en utilisant [Ma Hache dans ta Face!]');
    }

}