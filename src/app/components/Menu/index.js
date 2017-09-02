import $ from 'jquery';
import menuTemplate from './menu.hbs';
import Tooltip from '../Tooltip/';
import menuIcon from './menu-icon.png';
import './menu.styl';

export default {
	render() {
		const $tooltip = Tooltip.render({
			html: 'Hover the menu icon to open the menu',
			size: 150,
			removeOn: { eventName: 'mouseover', selector: '.menu' }
		});

		const $menu = $(menuTemplate({ menuIcon }));
		$menu.prepend($tooltip);

		return $menu;
	}
}
