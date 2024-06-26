import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'In this project we seek to optimize an existing neural network model known as Nexis. Classes were created to allow us to run experiments needed for parameter optimization. Using genetic data \
			statistical analysis was preformed to find the top correlated genes to our predictive model. These gens were explored and ran through an experimental notebook to discover optimial genetic model.',
		shortDescription:
			'Neural Network model for predicting tau protein pregression in mice subject with genetic expression data.',
		links: [{ to: 'https://github.com/Raj-Lab-UCSF/NexIS_SBI/tree/main', label: 'GitHub' }],
		logo: Assets.Unknown,
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
			'In this project, we created an API that can be used to create ones own cellular autmata. This was created using software best practices and an exaple model on the diffusion of gas is included in applications.',
		shortDescription:
			'API for creating cellar automata models, with example usage.',
		links: [{ to: 'https://github.com/fractalclockwork/cellular_automata', label: 'GitHub' }],
		logo: Assets.Unknown,
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
			'In this project, using the ANI dataset on molecular, their AEVs were calculated. A nural network with several layers was created and trained on this data. PCA was also used to explore increased performance.',
		shortDescription:
			'An accelerated neural network engine for predicting molecular energies.',
		links: [{ to: 'https://github.com/parkerfromm/ani-final/tree/main/ani_proj', label: 'GitHub' }],
		logo: Assets.Unknown,
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
		logo: Assets.Unknown,
		name: 'Predictive Air Quality Exploratory Data Analysis',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'jupyter'),
		type: 'Linear Regression Model and EDA',
	}
];

export const title = 'Projects';
