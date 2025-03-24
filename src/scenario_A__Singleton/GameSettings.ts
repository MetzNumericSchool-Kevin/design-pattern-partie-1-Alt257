export class GameSettings {
    private static $instance:GameSettings;
    private __construct() {}
    public static getInstance():GameSettings {
        if(!GameSettings.$instance)
            GameSettings.$instance = new GameSettings();

        return GameSettings.$instance;
    }


    private _difficulty:string;
    private _language:string;
    private _volumeMusic:number;
    private _volumeEffects:number;
    private _screenResolution:string;
    private _graphicsQuality:string;

    public getGraphicsQuality(): string {
        return this._graphicsQuality;
    }

    public setGraphicsQuality(value: string) {
        this._graphicsQuality = value;
        return this;
    }

    public getDifficulty(): string {
        return this._difficulty;
    }

    public setDifficulty(value: string) {
        this._difficulty = value;
        return this;
    }

    public getLanguage(): string {
        return this._language;
    }

    public setLanguage(value: string) {
        this._language = value;
        return this;
    }

    public getVolumeMusic(): number {
        return this._volumeMusic;
    }

    public setVolumeMusic(value: number) {
        this._volumeMusic = value;
        return this;
    }

    public getVolumeEffects(): number {
        return this._volumeEffects;
    }

    public setVolumeEffects(value: number) {
        this._volumeEffects = value;
        return this;
    }

    public getScreenResolution(): string {
        return this._screenResolution;
    }

    public setScreenResolution(value: string) {
        this._screenResolution = value;
        return this;
    }
}