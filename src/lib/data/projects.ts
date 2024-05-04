import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'In this project, we combined data analysis and machine learning techniques to model air quality across various US counties. Using Python libraries NumPy, Pandas, seaborn, matplotlib, and scikit-learn, our team constructed two linear regression models and successfully conducted a comprehensive analysis of emission data.',
		shortDescription:
			'Neural Network model for predicting tau protein pregression in mice subject with genetic expression data.',
		links: [{ to: 'https://github.com/Raj-Lab-UCSF/NexIS_SBI/tree/main', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Optimizing the NexIS - SBI mouse tauopathy model',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'jupyter'),
		type: 'Capstone Project',
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'In this project, we combined data analysis and machine learning techniques to model air quality across various US counties. Using Python libraries NumPy, Pandas, seaborn, matplotlib, and scikit-learn, our team constructed two linear regression models and successfully conducted a comprehensive analysis of emission data.',
		shortDescription:
			'API for creating cellar automata models, with example usage.',
		links: [{ to: 'https://github.com/fractalclockwork/cellular_automata', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Cellular Automata',
		period: {
			from: new Date()
		},
		skills: getSkills('cpp', 'python'),
		type: 'API',
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'In this project, we combined data analysis and machine learning techniques to model air quality across various US counties. Using Python libraries NumPy, Pandas, seaborn, matplotlib, and scikit-learn, our team constructed two linear regression models and successfully conducted a comprehensive analysis of emission data.',
		shortDescription:
			'An accelerated neural network engine for predicting molecular energies.',
		links: [{ to: 'https://github.com/parkerfromm/ani-final/tree/main/ani_proj', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'ANI Molecular Energy Predictor',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'jupyter'),
		type: 'Nerual Network',
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'In this project, we combined data analysis and machine learning techniques to model air quality across various US counties. Using Python libraries NumPy, Pandas, seaborn, matplotlib, and scikit-learn, our team constructed two linear regression models and successfully conducted a comprehensive analysis of emission data.',
		shortDescription:
			'Exploring the Link Between Gas Emissions and Air Quality in the United States.',
		links: [{ to: 'https://github.com/EnviroTechSean/TeamPunchParty/tree/main', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Predictive Air Quality Exploratory Data Analysis',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'jupyter'),
		type: 'Linear Regression Model and EDA',
	}
];

export const title = 'Projects';
