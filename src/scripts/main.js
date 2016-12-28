'use strict';

$(() => {
    Promise.all([
        templates.get('skills'),
        templates.get('personal-info'),
        data.get()
    ])
    .then(resolved => {
        const [skillsTemplate, workExpTemplate, personalData] = resolved;
        console.log(personalData);
        $('.skills-section').html(skillsTemplate(personalData));
        $('.work-expirience-section').html(workExpTemplate(personalData));
    })
    .catch(error => console.log(error));
});