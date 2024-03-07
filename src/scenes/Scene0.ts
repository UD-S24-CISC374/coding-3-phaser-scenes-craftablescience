import Phaser from "phaser";

import Constants from "./Constants";
import { STATE_DEFAULT } from "./State";

export default class Scene0 extends Phaser.Scene {
    private fading: boolean;

    constructor() {
        super({ key: 'Scene0' });
        this.fading = false;
    }

    create() {
        this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'bg0');

        const yesBtn = this.add.text(this.cameras.main.displayWidth * 0.34, this.cameras.main.displayHeight * 0.82, 'YES', { color: '#0f0', fontSize: '36px' })
            .setInteractive();
        yesBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });

        const noBtn = this.add.text(this.cameras.main.displayWidth * 0.513, this.cameras.main.displayHeight * 0.81, 'NO', { color: '#f00', fontSize: '34px' })
            .setInteractive();
        noBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.start('Scene1', STATE_DEFAULT);
        });
    }
}
