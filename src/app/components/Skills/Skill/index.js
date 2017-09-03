import $ from 'jquery';
import skillTemplate from './skill.hbs';
import AnimatedModalWindow from '../../AnimatedModalWindow/';

export default {
	render(data) {
		const $skill = $(skillTemplate(data));
		$skill.on('click', () => {
			AnimatedModalWindow
				.render({
					title: data.name,
					description: data.description,
					code: data.code
				})
				.appendTo('body');

			AnimatedModalWindow.mounted();
		});

		return $skill;
	}
}