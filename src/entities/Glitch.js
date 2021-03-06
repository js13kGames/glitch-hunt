(function () {
    'use strict';

    var X = 0.8;
    var Y = 0.775;
    var WIDTH = 0.1;
    var HEIGHT = 0.1778;
    var SPEED = 0.008;
    var HEALTH = 25;

    function Glitch() {

    }

    Glitch.prototype.init = function init() {
        G.shrinkable.deregister(this);
        G.positionable(this, X, Y, WIDTH, HEIGHT);
        G.imageRenderable(this, G.images.glitch);
        G.autoMoveable(this, SPEED, G.autoMoveable.direction.LEFT);
        G.bounceable(this);
        G.hurtable(this, HEALTH);
        G.collidable(this);
    };

    Glitch.prototype.onCollision = function onCollision(entity) {
        if (entity instanceof G.Bullet) {
            G.audio.hit();
            this.health--; // TODO - stop leaky abstraction
        }

        if (this.health === 0) {
            G.collidable.deregister(this);
            G.imageRenderable(this, G.images.glitchShot);
            G.shrinkable(this);
            G.gameState.onBossDefeated();

            // TODO: this probably shouldn't live here
            G.audio.playTrack('snippet');

            G.audio.onTrackStop = function onTrackStop() {
                G.scenes.boss.end();
                G.scenes.hacking.start();
            };
        }
    };

    G.Glitch = Glitch;
}());