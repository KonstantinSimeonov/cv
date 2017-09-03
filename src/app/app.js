import $ from 'jquery';

import data from './data';

import 'styles/main.styl';
import 'styles/print.styl';

import Education from './components/Education';
import Languages from './components/Languages';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PersonalInfo from './components/PersonalInfo';
import Strengths from './components/Strengths';
import WorkExperience from './components/WorkExperience';
import Tooltip from './components/Tooltip';
import Menu from './components/Menu';

data.skills.sort((first, second) => (first.priority || 9999) - (second.priority || 9999));

const selectors = [
    ['.skills-section', Skills],
    ['.education-section', Education],
    ['.languages-section', Languages],
    ['.work-expirience-section', WorkExperience],
    ['.personal-info-panel', PersonalInfo],
    ['.strengths-section', Strengths],
    ['.projects-section', Projects]
];

selectors.forEach(([s, component]) => $(s).append(component.render(data)));

$('body').prepend(Menu.render());

$('body').addClass('opaque');

$('#btn-print').on('click', () => {
    alert('Please tick the options for background colors, images and graphics from page setup/options');
    window.print();
});