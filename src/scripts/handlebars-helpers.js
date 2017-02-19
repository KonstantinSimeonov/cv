/* globals $, Handlebars */

'use strict';

$(() => {
    Handlebars.registerHelper('ifEqual', function (first, second, options) {
        if (first === second) {
            return options.fn(this);
        }

        return options.inverse(this);
    });
});
