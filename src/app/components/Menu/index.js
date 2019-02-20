import $ from 'jquery';
import menuTemplate from './menu.hbs';
import menuIcon from './menu-icon.png';
import './menu.styl';

const PRINT_MESSAGE = 'Please tick the options for background colors, images and graphics from page setup/options';

export default {
	render() {
		const $menu = $(menuTemplate({ menuIcon }));
		$menu.find('#btn-print').on('click', () => {
			alert(PRINT_MESSAGE);
			window.print();
		});

		return $menu;
	}
}
