'use strict';

$(() => {
    Promise.all([
        templates.get('skills'),
        data.get()
    ])
    .then(resolved => {
        const [compiledTemplate, personalData] = resolved;
        console.log(personalData);
        $('#main-content').html(compiledTemplate(personalData));
    })
    .catch(error => console.log(error));
});