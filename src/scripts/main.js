'use strict';

$(() => {
    Promise.all([
        templates.get('skills'),
        templates.get('work-experience'),
        templates.get('personal-info'),
        data.get()
    ])
    .then(resolved => {
        const [skillsTemplate, workExpTemplate, personalInfoTemplate, personalData] = resolved;
        console.log(personalData);
        $('.skills-section').html(skillsTemplate(personalData));
        $('.work-expirience-section').html(workExpTemplate(personalData));
        $('.personal-info-panel').html(personalInfoTemplate(personalData.personalInfo));
})
    .catch(error => console.log(error));
});