let config = {
    width: 2048,
    height: 2048,
    backgroundColor: 0x000000,
    scene: [Scene1],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}
let gameSettings = {
    playerSpeed: 64*60,
}
let game = new Phaser.Game(config);