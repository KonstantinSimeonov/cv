import $ from 'jquery';
import projectsTemplate from './projects.hbs';
import './projects.styl';

export default {
	render(data) {
		return $(projectsTemplate(data));
	}
};
