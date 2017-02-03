'use strict';

const data = (() => {
    let CACHE = null;

    return {
        get() {
            if(CACHE) {
                return Promise.resolve(CACHE);
            }

            return new Promise((resolve, reject) => {
                $.ajax({
                    method: 'GET',
                    url: './data/data.json',
                    contentType: 'application/json',
                    success: jsonData => {
                        CACHE = jsonData;
                        resolve(CACHE);
                    },
                    error: reject
                });
            });
        }
    }
})();