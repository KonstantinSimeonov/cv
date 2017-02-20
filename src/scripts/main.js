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
                    [1, 2, 3, 4],
                    [1, 2, 3],
                    [1, 2, 3],
                    [1, 2, 3, 4]
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
        })
        .catch(error => console.log(error));

    $('.pdf-export-btn').on('click', ev => {
        const doc = new jsPDF('portrait', 'cm'),
            $btn = $(ev.target);

        $btn.hide();

        doc.addHTML($('#container').get(0), () => {
            $btn.show();
            doc.save(document.title + '.pdf');
        });
    });
});
