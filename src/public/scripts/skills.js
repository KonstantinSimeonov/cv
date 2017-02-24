/* globals $, data */

'use strict';

function attachSkillsEvents() {

    // dialog window widget parts
    const $container = $('<div />').addClass('skill-details-container'),
        $closeBtn = $('<a href="#" />').addClass('close-btn pull-right').text('x').appendTo($container),
        $msgBox = $('<article />').addClass('skill-details').appendTo($container),
        $skillTitle = $('<strong />').addClass('skill-title').appendTo($msgBox),
        $skillDescription = $('<p />').addClass('skill-description').appendTo($msgBox),
        $code = $('<pre />').appendTo($msgBox),
        $overlay = $('.gray-overlay'),
        $globalContainer = $('#container');

    $globalContainer.prepend($container);

    $('.skills-container').on('click', '.rectangle', ev => {
        const $target = $(ev.target),
            $rectangle = $target.hasClass('rectangle') ? $target : $target.parents('.rectangle'),
            classToAdd = $rectangle.hasClass('tech') ? 'tech' : 'soft',
            classToRemove = classToAdd === 'tech' ? 'soft' : 'tech',
            skillName = $rectangle.find('.skill-name').html();

        $closeBtn.removeClass(classToRemove).addClass(classToAdd);
        $container.removeClass(classToRemove).addClass(classToAdd);

        $skillTitle.html(skillName);

        data.get().then(dataInfo => {
            const { description, code } = dataInfo.skills.find(sk => sk.name === skillName);

            $skillDescription.html(description);
            if (code) {
                $code.html(code);
            }
            $overlay.removeClass('hidden');
            $container.addClass('active');
        });
    });

    function closeMsgBox(event) {
        event.preventDefault();
        $container.removeClass('active');
        $overlay.addClass('hidden');
        $code.html('');
    }

    $overlay.on('click', closeMsgBox);
    $container.on('click', '.close-btn', closeMsgBox);
}
