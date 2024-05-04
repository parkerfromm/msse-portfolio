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
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
