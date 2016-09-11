(function () {
    'use strict';

    G.scenes.getReady = {
        start: function start() {
            /* TODO: audio end event so that
             * whole track plays before changing
             * scene */

            G.audio.playTrack('snippet');
            G.entityPool.getSingleton('getReady');
        }
    };
}());