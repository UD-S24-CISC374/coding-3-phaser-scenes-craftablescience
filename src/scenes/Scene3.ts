import Phaser from "phaser";

import Constants from "./Constants";
import State, { STATE_DEFAULT } from "./State";

export default class Scene2 extends Phaser.Scene {
    private state: State;

    private fading: boolean;

    constructor() {
        super({ key: 'Scene3' });
        this.state = STATE_DEFAULT;
        this.fading = false;
    }

    init(data: State) {
        this.state = data;
    }

    create() {
        this.cameras.main.fadeIn(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);

        this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'bg3');

        this.add.sprite(650, 400, 'bleh0').play('bleh').setScale(0.6);
        this.add.sprite(1100, 100, 'jump0').play('jump').setScale(0.6);
        this.add.image(200, 400, 'merp').setScale(0.35);
        this.add.image(1100, 350, 'read').setScale(0.5);

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
            this.scene.start('Scene4', this.state);
        });
    }
}
