import languagesTemplate from './template.hbs';
import './laguages.styl';
import $ from 'jquery';

export default {
	render(data) {
		return $(languagesTemplate(data));
	}
};
