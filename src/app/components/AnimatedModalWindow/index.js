import $ from 'jquery';
import modalWindowTemplate from './animated-modal-window.hbs';
import './animated-modal-window.styl';

export default {
	render(data){
		this._component = $(modalWindowTemplate(data));

		const close = () => {
			this._component.find('.skill-details-container').removeClass('in');
			setTimeout(() => this._component.remove(), 200);
		};

		this._component.find('.close-btn').on('click', close);
		this._component.on('click', event => {
			if(event.target === this._component.get(0)) {
				close();
			}
		})

		return this._component;
	},
	mounted() {
		setTimeout(() => this._component.find('.skill-details-container').addClass('in'), 200);
	}
}
