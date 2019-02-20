import workExperience from './work-experience.hbs';
import './work-experience.styl';
import $ from 'jquery';

export default {
	render(data) {
		return $(workExperience(data));
	}
};
