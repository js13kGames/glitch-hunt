(function () {
    'use strict';

    /* Methods used by various system to calculate
     * speeds and positions based upon game state */
    G.computations = {
        computeKeySpeed: function computeKeySpeed() {
            return G.gameState.keySpeed + G.constants.KEY_SPEED_INCREMENT * G.gameState.level;
        },

        computeCaptureZoneX: function computeCaptureZoneX() {
            return G.gameState.captureZoneX + G.constants.CAPTURE_ZONE_X_INCREMENT * G.gameState.level;
        },

        computeKeyGenerationTime: function computeKeyGenerationTime() {
            return G.constants.KEY_GEN_INTERVAL_MS - G.constants.KEY_GEN_DECREMENT_MS * G.gameState.level;
        }
    };
}());