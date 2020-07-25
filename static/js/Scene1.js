class Scene1 extends Phaser.Scene {
    constructor() {
        super("gameStart");
    }
    preload() {
        this.load.image('grass','/asset/grass.png');
        this.load.image('character','/asset/character.png');
    }
    create() {
        // Build map
        for(let i=0;i<32;i++) {
            for(let j=0;j<32;j++) {
                this.grass = this.add.image(i*64,j*64,"grass");
                this.grass.setOrigin(0,0);
            }
        }
        // Set character
        this.character = this.physics.add.sprite(0,0,"character");
        this.character.setOrigin(0,0);
        this.character.setCollideWorldBounds(true);

        // Set key
        this.cursorKeys = this.input.keyboard.createCursorKeys();

    }
    update() {
        this.characterMove();
    }
    characterMove() {
        if(this.cursorKeys.right.isDown) {
            this.physics.moveTo(this.character,this.character.x+64,this.character.y,gameSettings.playerSpeed,0);
        } else if (this.cursorKeys.left.isDown) {
            this.physics.moveTo(this.character,this.character.x-64,this.character.y,gameSettings.playerSpeed,0);
        } else if (this.cursorKeys.down.isDown) {
            this.physics.moveTo(this.character,this.character.x,this.character.y+64,gameSettings.playerSpeed,0);
        } else if (this.cursorKeys.up.isDown) {
            this.physics.moveTo(this.character,this.character.x,this.character.y-64,gameSettings.playerSpeed,0);
        }
        if(this.cursorKeys.right.isUp && this.cursorKeys.left.isUp) {
            this.character.setVelocityX(0);
        }
        if(this.cursorKeys.up.isUp && this.cursorKeys.down.isUp) {
            this.character.setVelocityY(0);
        }
    }
}