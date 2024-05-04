import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'cpp',
		color: 'yellow',
		description:
			'Constructed multiple comprehensive repositories from scratch, organizing source files, include files, and executables into well-defined subdirectories to enhance code maintainability and collaboration. Designed and implemented fundamental data structures including stack, queue, priority queue, hash map, linked list, and binary Search tree. Structures were tested to evaluate performance. In a separate advanced programming course, extensively utilized the C++ Standard Library to enhance project complexity and efficiency. Gained proficientcy in high-level object-oriented programming, focusing on class infrastructure, inheritance, and automated configurations to streamline software development processes. Applied knowledge to develope sophisticated quantum chemistry code for CNDO/2 and atomic orbitals analysis, featuring Hartree-Fock methods and potential energy surface mapping.  Implemented custom linear algebra functions and developed matrix vector classes to facilitate complex mathematical operations and simulations. Gained substantial experience in parallelization techniques using OpenMP, MPI, GCC, and CUDA, significantly optimizing code performance across various computing platforms.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			"Experienced with Python, demonstrating proficiency in object- oriented programming, which includes expertise in inheritance, encapsulation, and polymorphism.Designed and implemented custom classes to enhance functionality in various projects.Notably, for my capstone project, I developed a specialized class framework to streamline the creation and management of machine learning model.Proficient in using Pandas for complex data analysis tasks; skilled in constructing and manipulating dataframes for large datasets.My work typically involves cleaning, transforming, and aggregating data, which is crucial for high - stakes data - driven decision - making.Utilized PyTorch to develop and implement state - of - the - art machine learning models.My focus has been on both supervised and unsupervised learning models, applying these to real - world datasets.Experienced in leveraging libraries such as Matplotlib and Seaborn for insightful data visualization.I have created a range of plots and charts, from basic line graphs to complex heatmaps, to effectively communicate results and findings.This includes developing visualizations to identify patterns, trends, and correlations, as well as using statistical plots to determine the best fit models for predictive analytics.Applied various optimization techniques to improve the efficiency and performance of Python scripts, reducing computation time and resource consumption.",
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'jupyter',
		color: 'blue',
		description:
			' Regularly utilized JupyterLab for exploring and analyzing real-world data sets. This included using tools such as Pandas for data manipulation, Regex for data cleaning, and SQL for data querying, which facilitated in-depth data delving and insight generation.Developed and fine-tuned predictive models directly within JupyterLab.Created a model that uses features like greenhouse gas emissions, population density, and proximity to coastlines to predict local air quality levels.  Implemented logistic regression models to classify emails as spam or not, and linear regression models to predict housing prices, demonstrating the versatility of regression techniques in solving diverse problems. Used JupyterLab extensively in my capstone project to run exploratory experiments using custom machine learning classes. This project was instrumental in refining model parameters and enhancing model accuracy through iterative testing and evaluation. For a final project, developed a machine learning model capable of predicting molecular energies. This project showcased the application of advanced machine learning techniques to solve complex chemical prediction problems.',
		logo: Assets.JupyterLab,
		name: 'JupyterLab',
		category: 'pro-lang'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
