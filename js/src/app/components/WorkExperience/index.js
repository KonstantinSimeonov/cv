import workExperience from './work-experience.hbs';
import './work-experience.styl';
import $ from 'jquery';

export default {
	render(data) {
        const { workExperience: jobs } = data;
        const sortedJobs = {
            workExperience: jobs.sort((x, y) => {
                const xFrom = Number(x.from.split(' ').pop())
                const yFrom = Number(y.from.split(' ').pop())
                return yFrom - xFrom
            })
        }
		return $(workExperience(sortedJobs));
	}
};
