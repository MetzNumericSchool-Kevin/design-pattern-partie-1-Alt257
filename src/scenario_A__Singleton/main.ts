import {GameSettings} from "./GameSettings";


function main() {
    const settings = GameSettings.getInstance();
    settings.setDifficulty('normal')
            .setLanguage('FR_fr')
            .setVolumeMusic(5.2)
            .setVolumeEffects(8.4)
            .setScreenResolution('720x720')
            .setGraphicsQuality('low');

    console.log('Difficulté: ' + settings.getDifficulty());
    console.log('Langue: ' + settings.getLanguage());
    console.log('Volume musique: ' + settings.getVolumeMusic());
    console.log('Volume effets sonores: ' + settings.getVolumeEffects());
    console.log('Résolution écran: ' + settings.getScreenResolution());
    console.log('Qualité graphique: ' + settings.getGraphicsQuality());
}

main();