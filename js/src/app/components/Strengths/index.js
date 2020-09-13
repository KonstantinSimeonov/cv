import strengthsTemplate from './strengths.hbs';
import './strengths.styl';
import $ from 'jquery';

export default {
	render(data) {
		return $(strengthsTemplate(data));
	}
};
