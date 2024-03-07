import Phaser from "phaser";

import Constants from "./Constants";
import State, { STATE_DEFAULT } from "./State";

export default class Scene2 extends Phaser.Scene {
    private state: State;

    private fading: boolean;

    constructor() {
        super({ key: 'Scene2' });
        this.state = STATE_DEFAULT;
        this.fading = false;
    }

    init(data: State) {
        this.state = data;
    }

    create() {
        this.cameras.main.fadeIn(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);

        this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'bg2');

        this.add.image(900, 500, 'mario').setScale(0.25);
        this.add.image(400, 450, 'thumbsup').setScale(0.6, 0.3);
        this.add.image(120, 408, 'hah').setScale(0.3);
        this.add.image(1100, 350, 'zelda').setScale(0.5);

        const yesBtn = this.add.text(
            this.cameras.main.displayWidth * Phaser.Math.FloatBetween(0.79, 0.81),
            this.cameras.main.displayHeight * Phaser.Math.FloatBetween(0.89, 0.91),
            'YES',
            { color: '#0f0', fontSize: '36px' })
            .setInteractive();
        yesBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.state.liked++;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });

        const noBtn = this.add.text(
            this.cameras.main.displayWidth * Phaser.Math.FloatBetween(0.87, 0.89),
            this.cameras.main.displayHeight * Phaser.Math.FloatBetween(0.89, 0.91),
            'NO',
            { color: '#f00', fontSize: '34px' })
            .setInteractive();
        noBtn.on('pointerdown', () => {
            if (this.fading) return;
            this.state.disliked++;
            this.cameras.main.fadeOut(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);
            this.fading = true;
        });

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
            this.scene.start('Scene3', this.state);
        });
    }
}
