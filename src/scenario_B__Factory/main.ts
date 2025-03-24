import {CharacterFactory} from "./CharacterFactory";

function main() {
    const team = [
        CharacterFactory.create('mage'),
        CharacterFactory.create('bard'),
        CharacterFactory.create('warrior'),
    ];

    team.forEach(character => character.attack());
}

main();