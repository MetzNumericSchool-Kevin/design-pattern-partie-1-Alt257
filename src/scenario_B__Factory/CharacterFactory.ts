import {ICharacter} from "./BO/ICharacter";
import {Mage} from "./BO/Mage";
import {Warrior} from "./BO/Warrior";
import {Bard} from "./BO/Bard";

export class CharacterFactory {
    static create(characterClass: string): ICharacter {
        switch (characterClass){
            case 'mage':        return new Mage();
            case 'warrior':     return new Warrior();
            case 'bard':        return new Bard();
            default:            return undefined;
        }
    }
}