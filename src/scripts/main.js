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

            const skills = [
                [1, 2, 3, 4],
                [1, 2, 3, 4],
                [1, 2, 3, 4],
                [1, 2]
            ];

            let next = 0;
            for (let i = 0, len = skills.length; i < len; i += 1) {
                for (let j = 0, len2 = skills[i].length; j < len2; j += 1) {
                    skills[i][j] = personalData.skills[next++];
                }
            }

            $('.skills-section').html(skillsTemplate({ rows: skills }));
            $('.education-section').html(educationTemplate(personalData));
            $('.languages-section').html(languagesTemplate(personalData));
            $('.work-expirience-section').html(workExpTemplate(personalData));
            $('.personal-info-panel').html(personalInfoTemplate(personalData.personalInfo));
            $('.strengths-section').html(strengthsTemplate(personalData));
            $('.projects-section').html(projectsTemplate(personalData));
        })
        .catch(error => console.log(error));
});