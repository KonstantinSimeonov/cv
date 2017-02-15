(() => {
    'use strict';

    const $container = $('<div />').addClass('skill-details-container'),
        $closeBtn = $('<a href="#" />').addClass('close-btn pull-right').text('x').appendTo($container),
        $msgBox = $('<article />').addClass('skill-details').appendTo($container),
        $skillTitle = $('<strong />').addClass('skill-title').appendTo($msgBox),
        $skillDescription = $('<p />').addClass('skill-description').appendTo($msgBox);

    $('.skills-container').on('click', '.hexagon', ev => {
        const $target = $(ev.target),
            $hexagon = $target.hasClass('hexagon') ? $target : $target.parents('.hexagon'),
            classToAdd = $hexagon.hasClass('tech') ? 'tech' : 'soft',
            classToRemove = classToAdd === 'tech' ? 'soft' : 'tech',
            skillName = $hexagon.find('.skill-name').html();

        $closeBtn.removeClass(classToRemove).addClass(classToAdd);
        $container.removeClass(classToRemove).addClass(classToAdd);

        $skillTitle.html(skillName);
        
        data.get().then(dataInfo => {
            const description = dataInfo.skills.find(sk => sk.name === skillName).description;

            $skillDescription.html(description);
            $(document.body).append($container);
        });
    });

    $(document).on('click', '.close-btn', ev => {
        ev.preventDefault();
        $(ev.target).parent().remove();
    });
})();