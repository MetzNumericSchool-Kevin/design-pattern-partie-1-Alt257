import {ICharacter} from "./ICharacter";

export class Mage implements ICharacter {
    public attack(): void {
        console.log('Le mage lance [Boule de Feu]');
    }

}