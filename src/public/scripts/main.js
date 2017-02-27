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
            ] = resolved;

            $('.skills-section').html(skillsTemplate(personalData));
            $('.education-section').html(educationTemplate(personalData));
            $('.languages-section').html(languagesTemplate(personalData));
            $('.work-expirience-section').html(workExpTemplate(personalData));
            $('.personal-info-panel').html(personalInfoTemplate(personalData.personalInfo));
            $('.strengths-section').html(strengthsTemplate(personalData));
            $('.projects-section').html(projectsTemplate(personalData));

            $('body').addClass('opaque');

            attachSkillsEvents();

            $('.navigation').tooltip({
                html: 'Hover the menu icon to open the menu',
                size: 150,
                removeOn: { eventName: 'mouseover', selector: '.menu' }
            });

            $('.skills-title').eq(0).tooltip({
                html: 'Click on a skill to see details',
                size: 100,
                removeOn: { eventName: 'click', selector: '.skills-section' },
                css: { 'margin-left': '1em' }
            });

            $('#btn-print').on('click', () => {
                alert('Please tick the options for background colors, images and graphics from page setup/options');
                window.print();
            });
        })
        .catch(error => console.log(error));
});
