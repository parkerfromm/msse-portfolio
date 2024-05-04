import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters degree of Molecular Science Software Engineering',
		description: '',
		location: 'Berkeley',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of California',
		period: { from: new Date(2023, 7, 1), to: new Date(2024, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Python', 'C++', 'github']
	},
	{
		degree: 'Bachelors of Science, Applied Mathematics',
		description: '',
		location: 'Merced',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of California',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Linear Algebra', 'Python', 'Matlab', 'Rstudio']
	}
];

export const title = 'Education';
