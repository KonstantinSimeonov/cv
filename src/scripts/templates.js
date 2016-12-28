'use strict';

const templates = (() => {

    const TEMPLATE_CACHE = Object.create(null);

    return {
        get(templateName) {
            if (templateName in TEMPLATE_CACHE) {
                return Promise.resolve(TEMPLATE_CACHE[templateName]);
            }

            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url: `/templates/${templateName}.handlebars`,
                    success: rawTemplate => {
                        TEMPLATE_CACHE[templateName] = Handlebars.compile(rawTemplate);
                        resolve(TEMPLATE_CACHE[templateName]);
                    },
                    error: reject
                });
            });
        }
    }
})();