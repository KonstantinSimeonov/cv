import $ from 'jquery';
import skillsTemplate from './skills.hbs';
import Tooltip from '../Tooltip/';
import './skills.styl';
import AnimatedModalWindow from '../AnimatedModalWindow';


export default {
    render(data) {
		const $tooltip = Tooltip.render({
			html: 'Click on a skill to see details',
			size: 100,
			removeOn: { eventName: 'click', selector: '.skills-section' },
			css: { 'margin-left': '1em' }
		});

		const $renderedTemplate = $(skillsTemplate(data));

		$renderedTemplate.eq(0).prepend($tooltip);

        $renderedTemplate.find('.skills-container').on('click', '.rectangle', ev => {
            $('body').prepend(AnimatedModalWindow.render({
				title: 'writing shit code',
				description: 'im a master at it',
				code: 'main = putStrLn "zdr kp"',
				type: 'tech'
			}));

			AnimatedModalWindow.mounted();
        });

        return $renderedTemplate;
    }
};
