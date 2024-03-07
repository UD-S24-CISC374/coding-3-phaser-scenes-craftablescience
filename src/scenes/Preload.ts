import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
        // Music
        this.load
            .audio('rollin', 'assets/snd/Rollin at 5.ogg');

        // Backgrounds
        this.load
            .image('bg0', 'assets/img/bg/bg0.png')
            .image('bg1', 'assets/img/bg/bg1.png')
            .image('bg2', 'assets/img/bg/bg2.png')
            .image('bg3', 'assets/img/bg/bg3.png')
            .image('bg4', 'assets/img/bg/bg4.png')
            .image('bg5', 'assets/img/bg/bg5.png');

        // Scene1
        this.load
            .image('case', 'assets/img/deal/case.jpg')
            .image('cover', 'assets/img/deal/cover.jpg')
            .image('guy', 'assets/img/deal/guy.jpg');

        // Scene2
        this.load
            .image('hah', 'assets/img/zelda/hah.png')
            .image('mario', 'assets/img/zelda/mario.png')
            .image('thumbsup', 'assets/img/zelda/thumbsup.png')
            .image('zelda', 'assets/img/zelda/zelda.png');

        // Scene 3
        this.load
            .image('merp', 'assets/img/nepeta/merp.png')
            .image('read', 'assets/img/nepeta/read.png');
        for (let i = 0; i <= 1; i++) {
            this.load.image(`bleh${i}`, `assets/img/nepeta/bleh${i}.png`);
        }
        for (let i = 0; i <= 49; i++) {
            this.load.image(`jump${i}`, `assets/img/nepeta/jump${i}.png`);
        }

        // Scene 4
        this.load
            .image('race', 'assets/img/race/race.jpg');
    }

    create() {
        const blehDesc: Phaser.Types.Animations.Animation = {
            key: 'bleh',
            frames: [],
            frameRate: 15,
            repeat: -1
        };
        for (let i = 0; i <= 1; i++) {
            (blehDesc.frames as Phaser.Types.Animations.AnimationFrame[]).push({ key: `bleh${i}` });
        }
        this.anims.create(blehDesc);

        const jumpDesc: Phaser.Types.Animations.Animation = {
            key: 'jump',
            frames: [],
            frameRate: 35,
            repeat: -1
        };
        for (let i = 0; i <= 49; i++) {
            (jumpDesc.frames as Phaser.Types.Animations.AnimationFrame[]).push({ key: `jump${i}` });
        }
        this.anims.create(jumpDesc);

        this.sound.add('rollin').setLoop(true).play();
        this.sound.pauseOnBlur = false;

        this.scene.start('Scene0');
    }
}
