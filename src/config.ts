import Phaser from "phaser";

import Preload from "./scenes/Preload";
import Scene0 from "./scenes/Scene0";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

export const CONFIG = {
    title: "Phaser Game",
    version: "1.0.0",
    type: Phaser.AUTO,
    backgroundColor: "#66adff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [Preload, Scene0, Scene1, Scene2, Scene3, Scene4, Scene5],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 300 },
            fps: 60,
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: true,
        antialias: false,
    },
};
