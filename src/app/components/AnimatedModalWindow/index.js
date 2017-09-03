import $ from 'jquery';
import modalWindowTemplate from './animated-modal-window.hbs';
import './animated-modal-window.styl';

export default {
	render(data){
		return this._component = $(modalWindowTemplate(data));
	},
	mounted() {
		setImmediate(() => this._component.find('.skill-details-container').addClass('in'));
	}
}
