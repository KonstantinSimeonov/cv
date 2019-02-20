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
import Menu from './components/Menu';

const selectors = [
    ['body', Menu],
    ['.skills-section', Skills],
    ['.education-section', Education],
    ['.languages-section', Languages],
    ['.work-expirience-section', WorkExperience],
    ['.personal-info-panel', PersonalInfo],
    ['.strengths-section', Strengths],
    ['.projects-section', Projects]
];

selectors.forEach(([s, component]) => $(s).append(component.render(data)));

$('body').addClass('opaque');
