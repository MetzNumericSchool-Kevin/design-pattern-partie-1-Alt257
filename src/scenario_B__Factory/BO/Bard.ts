import {ICharacter} from "./ICharacter";

export class Bard implements ICharacter {
    public attack(): void {
        console.log('Le barde chante comme un dieu! YEAH');
    }

}