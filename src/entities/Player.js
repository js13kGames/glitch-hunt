(function () {
    'use strict';

    function Player() {

    }

    Player.prototype.init = function init(x, y, width, height, speed) {
        G.positionable(this, x, y, width, height);
        G.imageRenderable(this, this.getSprite);
		G.keyboardMoveable(this, speed);
    };

	Player.prototype.getSprite = function getSprite() {
		if (this.direction === G.keyboardMoveable.direction.LEFT) {
			return G.spriteSheets.playerStationary.get(0);			
		}

		return G.spriteSheets.playerStationary.get(1);
	}

    G.Player = Player;
}());