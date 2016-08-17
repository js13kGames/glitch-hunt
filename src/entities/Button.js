'use strict';

function Button(text, x, y, width, height) {
    TextRenderable.call(this, text, '16px monospace', 'white', x, y);
    RectRenderable.call(this, 'black', 'green', x, y, width, height);
}