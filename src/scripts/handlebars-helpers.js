'use strict';

$(() => {
    Handlebars.registerHelper('ifEqual', function (first, second, options) {
        console.log(first, second, this);
        
        if(first === second) {
            return options.fn(this);
        }

        return options.inverse(this);
    });
});