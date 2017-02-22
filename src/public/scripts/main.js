/* globals $, templates, data */

'use strict';

$(() => {
    Promise.all([
        templates.get('skills'),
        templates.get('work-experience'),
        templates.get('personal-info'),
        templates.get('languages'),
        templates.get('education'),
        templates.get('strengths'),
        templates.get('projects'),
        data.get()
    ])
        .then(resolved => {
            const [
                skillsTemplate,
                workExpTemplate,
                personalInfoTemplate,
                languagesTemplate,
                educationTemplate,
                strengthsTemplate,
                projectsTemplate,
                personalData
            ] = resolved,
                skillsLayout = [
                    [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4]
                ];

            let next = 0;
            for (let i = 0, len = skillsLayout.length; i < len; i += 1) {
                for (let j = 0, len2 = skillsLayout[i].length; j < len2; j += 1) {
                    skillsLayout[i][j] = personalData.skills[next++];
                }
            }

            $('.skills-section').html(skillsTemplate({ rows: skillsLayout }));
            $('.education-section').html(educationTemplate(personalData));
            $('.languages-section').html(languagesTemplate(personalData));
            $('.work-expirience-section').html(workExpTemplate(personalData));
            $('.personal-info-panel').html(personalInfoTemplate(personalData.personalInfo));
            $('.strengths-section').html(strengthsTemplate(personalData));
            $('.projects-section').html(projectsTemplate(personalData));

            $('body').addClass('visible');

            attachSkillsEvents();

            $('.navigation').tooltip({
                html: 'Hover the menu icon to open the menu',
                size: 150,
                removeOn: { eventName: 'mouseover', selector: '.menu' }
            });

            $('.skills-title').eq(0).tooltip({
                html: 'Click on an ellipse to see details',
                size: 100,
                removeOn: { eventName: 'click', selector: '.skills-section' },
                css: { 'margin-left': '1em' }
            });
        })
        .catch(error => console.log(error));
});
