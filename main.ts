namespace SpriteKind {
    export const sword = SpriteKind.create()
    export const monster = SpriteKind.create()
    export const monster2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.sword, SpriteKind.monster, function (sprite, otherSprite) {
    MONSTER.startEffect(effects.ashes, 1000)
    sprites.destroy(MONSTER)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    bronze_sword.follow(DEMON, 75)
    sprites.destroy(sword)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    sprites.destroy(sword)
    sprites.destroy(bronze_sword)
    sprites.destroy(gold_sword)
    diamond_sword.follow(DEMON, 85)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    sprites.destroy(sword)
    sprites.destroy(bronze_sword)
    sprites.destroy(gold_sword)
    sprites.destroy(diamond_sword)
    obsidian_sword.follow(DEMON, 90)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . 
        . . . . . 2 2 . . . 
        . . . 2 2 2 2 2 . . 
        . 2 2 2 4 4 4 2 2 . 
        . 2 4 4 5 5 4 4 2 . 
        . 2 4 5 5 5 5 5 2 2 
        . 2 5 5 5 5 5 5 4 2 
        . 2 4 5 5 5 5 5 4 2 
        . . 2 4 4 5 5 5 4 . 
        . . . 2 2 5 5 4 2 . 
        `, DEMON, 70, 70)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    DEMON.setPosition(20, 107)
    tiles.setCurrentTilemap(tilemap`niveau2`)
})
sprites.onOverlap(SpriteKind.monster, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    DEMON.setPosition(20, 107)
    tiles.setCurrentTilemap(tilemap`niveau3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    sprites.destroy(sword)
    sprites.destroy(bronze_sword)
    gold_sword.follow(DEMON, 80)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile39`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile40`, function (sprite, location) {
    DEMON.startEffect(effects.bubbles, 1000)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    DEMON.setPosition(20, 107)
    tiles.setCurrentTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    DEMON.setPosition(20, 107)
    tiles.setCurrentTilemap(tilemap`niveau5`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    DEMON.startEffect(effects.fire, 1000)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau4`)
    DEMON.setPosition(20, 107)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.monster, function (sprite, otherSprite) {
    MONSTER.startEffect(effects.fire, 1000)
    sprites.destroy(MONSTER)
    sprites.destroy(projectile)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`niveau1`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    game.showLongText("BOUJOUR GUERRIER SAVAIS TU QUE DANS CE MONDE IL Y A PLEIN DE BIOME ET DE DEFI MAIS JE NE LES CONNAIS PAS DONC VA EXPLORER ET RAPPORTE MOI SES INFOS!!! ", DialogLayout.Center)
})
scene.onOverlapTile(SpriteKind.sword, assets.tile`myTile56`, function (sprite, location) {
    DEMON.setPosition(20, 107)
    tiles.setCurrentTilemap(tilemap`niveau8`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    DEMON.setPosition(20, 107)
    tiles.setCurrentTilemap(tilemap`niveau6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    game.showLongText("Bonjour guerrier si tu es venu ici c'est parce que tu en a marre de tout le temps utiliser ton épée et si je te dis que tu peux utiliser un sort pour combattre de loin amuse toi!!!", DialogLayout.Center)
})
let projectile: Sprite = null
let DEMON: Sprite = null
let sword: Sprite = null
let MONSTER: Sprite = null
let bronze_sword: Sprite = null
let gold_sword: Sprite = null
let diamond_sword: Sprite = null
let obsidian_sword: Sprite = null
obsidian_sword = sprites.create(img`
    . . . . . . f f . . . . . . . . 
    . . . . . f c c f . . . . . . . 
    . . . . . f c b f . . . . . . . 
    . . . . . f b c f . . . . . . . 
    . . . . . f c b f . . . . . . . 
    . . . . . f c c f . . . . . . . 
    . . . . . f c b f . . . . . . . 
    . . . . . f b c f . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `, SpriteKind.sword)
diamond_sword = sprites.create(img`
    . . . . . . f f . . . . . . . . 
    . . . . . f 9 9 f . . . . . . . 
    . . . . . f 1 9 f . . . . . . . 
    . . . . . f 9 9 f . . . . . . . 
    . . . . . f 1 9 f . . . . . . . 
    . . . . . f 1 9 f . . . . . . . 
    . . . . . f 9 9 f . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `, SpriteKind.sword)
gold_sword = sprites.create(img`
    . . . . . . f f . . . . . . . . 
    . . . . . f 5 5 f . . . . . . . 
    . . . . . f 1 5 f . . . . . . . 
    . . . . . f 5 5 f . . . . . . . 
    . . . . . f 1 5 f . . . . . . . 
    . . . . . f 1 5 f . . . . . . . 
    . . . . . f 1 5 f . . . . . . . 
    . . . . . f 5 5 f . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `, SpriteKind.sword)
bronze_sword = sprites.create(img`
    . . . . . . f f . . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f e e f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    `, SpriteKind.sword)
MONSTER = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.monster)
sword = sprites.create(img`
    . . . . . . b b b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b 1 b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b 1 b b b . . . . . . 
    . . . . . b 1 b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . . . b b b b b . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f c f . . . . . . . 
    . . . . . . f c f . . . . . . . 
    . . . . . . f c f . . . . . . . 
    . . . . . . f c f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.sword)
DEMON = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f 2 2 f f f f 2 2 f f . . 
    . . f f 2 2 f f f f 2 2 f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f 2 f f f f f f 2 f f . . 
    . . f f f 2 2 2 2 2 2 f f f . . 
    . . f f f f f f f f f f f f . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(DEMON)
scene.cameraFollowSprite(DEMON)
obsidian_sword.setPosition(145, 9)
diamond_sword.setPosition(145, 7)
gold_sword.setPosition(145, 5)
bronze_sword.setPosition(145, 3)
DEMON.setPosition(20, 107)
MONSTER.setPosition(12, 11)
tiles.setCurrentTilemap(tilemap`niveau1`)
sword.setPosition(13, 77)
sword.follow(DEMON, 70)
MONSTER.follow(DEMON, 50)
