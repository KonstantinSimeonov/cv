import educationTemplate from './education.hbs';
import './education.styl';
import $ from 'jquery';

export default {
	render(data) {
		return $(educationTemplate(data));
	}
};
