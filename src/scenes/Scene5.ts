import Phaser from "phaser";

import Constants from "./Constants";
import State, { STATE_DEFAULT } from "./State";

export default class Scene2 extends Phaser.Scene {
    private state: State;

    constructor() {
        super({ key: 'Scene5' });
        this.state = STATE_DEFAULT;
    }

    init(data: State) {
        this.state = data;
    }

    create() {
        this.cameras.main.fadeIn(Constants.FADE_DURATION, Constants.FADE_COLOR_RED, Constants.FADE_COLOR_GREEN, Constants.FADE_COLOR_BLUE);

        this.add.image(this.cameras.main.displayWidth / 2, this.cameras.main.displayHeight / 2, 'bg5');

        this.add.text(
            this.cameras.main.displayWidth * Phaser.Math.FloatBetween(0.625, 0.675),
            this.cameras.main.displayHeight * 0.565,
            `${this.state.liked}`,
            { color: '#0f0', fontSize: '48px' });

        this.add.text(
            this.cameras.main.displayWidth * Phaser.Math.FloatBetween(0.625, 0.675),
            this.cameras.main.displayHeight * 0.67,
            `${this.state.disliked}`,
            { color: '#f00', fontSize: '48px' });
    }
}
