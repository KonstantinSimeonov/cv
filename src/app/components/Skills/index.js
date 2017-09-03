import $ from 'jquery';
import skillsTemplate from './skills.hbs';
import Tooltip from '../Tooltip/';
import './skills.styl';
import AnimatedModalWindow from '../AnimatedModalWindow';
import Skill from './Skill/';

export default {
	render({ skills }) {
		const $tooltip = Tooltip.render({
			html: 'Click on a skill to see details',
			size: 100,
			removeOn: { eventName: 'click', selector: '.skills-section' },
			css: { 'margin-left': '1em' }
		});

		const $renderedTemplate = $(skillsTemplate(skills));
		$renderedTemplate.eq(0).prepend($tooltip);
		$renderedTemplate
			.find('.skill-list')
			.append(...skills.map(d => {
				return $('<li class="skill rectangle" />').append(Skill.render(d))
			}))

		return $renderedTemplate;
	}
};
