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
        
        const skills = [
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2]
        ];
        
        let next = 0;
        for(let i = 0, len = skills.length; i < len; i += 1) {
            for(let j = 0, len2 = skills[i].length; j < len2; j += 1) {
                skills[i][j] = personalData.skills[next++];
            }
        }

        $('.skills-section').html(skillsTemplate({ rows: skills }));

        $('.work-expirience-section').html(workExpTemplate(personalData));
        $('.personal-info-panel').html(personalInfoTemplate(personalData.personalInfo));
})
    .catch(error => console.log(error));
});