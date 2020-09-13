import $ from 'jquery';
import menuTemplate from './menu.hbs';
import menuIcon from './menu-icon.png';
import './menu.styl';

const PRINT_MESSAGE = 'Check the options for background colors, images and graphics from page setup/options before you print. In case of an export to pdf, A4 sheet option works best :)';

export default {
	render() {
		const $menu = $(menuTemplate({ menuIcon }));
		$menu.find('#btn-print').on('click', () => {
			// eslint-disable-next-line no-alert
			alert(PRINT_MESSAGE);
			window.print();
		});

		return $menu;
	}
};
