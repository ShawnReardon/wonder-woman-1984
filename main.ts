function cleanUp () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setTileAt(value, sprites.swamp.swampTile16)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let evilGuy: Sprite = null
let countdownTimer = 30
info.startCountdown(countdownTimer)
let mySprite = sprites.create(img`
    . . . 5 . . 5 . . 5 . . 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 2 2 2 2 5 5 5 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f d d d d d d f f . . . 
    . . f f f d d d d d d f f f . . 
    . . f f f d 3 d d 3 d f f f . . 
    . . f f f d d d d d d f f f . . 
    . f f f f 2 d d d d 2 f f f f . 
    . . f f 2 2 5 2 2 5 2 2 f f . . 
    . . f 2 2 2 2 5 5 2 2 2 2 f . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . . f 2 2 5 2 2 5 2 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
cleanUp()
for (let index = 0; index <= 4; index++) {
    evilGuy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 2 2 1 1 1 2 2 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 f 1 1 1 f 1 1 1 . . 
        . . 1 1 1 1 f f f f f 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(evilGuy, sprites.swamp.swampTile16)
}
game.onUpdateInterval(100, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (mySprite.x - value.x < 5 && mySprite.y - value.y < 5) {
            value.follow(mySprite, randint(50, 150))
        } else {
        	
        }
    }
})
