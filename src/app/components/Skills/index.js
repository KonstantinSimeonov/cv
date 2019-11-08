import $ from 'jquery';
import skillsTemplate from './skills.hbs';
import Tooltip from '../Tooltip';
import Skill from './Skill';
import './skills.styl';

export default {
	render({ skills }) {
		const $tooltip = Tooltip.render({
			html: 'Click a skill for details',
			size: 100,
			css: { right: '0', top: '-5%', width: '10em' }
		});

		const skillItems = skills.sort(
			(a, b) => (a.priority || Infinity) - (b.priority || Infinity)
		).map(
			skill => $('<li class="skill rectangle" />').append(Skill.render(skill))	
		);

		const $renderedTemplate = $(skillsTemplate());
		$renderedTemplate.eq(0).prepend($tooltip);
		$renderedTemplate
			.one('click', () => $tooltip.remove())
			.find('.skill-list')
			.append(...skillItems);

		return $renderedTemplate;
	}
};
