import $ from 'jquery';
import personalInfoTemplate from './personal-info.hbs';
import './personal-info.styl';

export default {
	render({ personalInfo }) {
		return $(personalInfoTemplate(personalInfo));
	}
};
