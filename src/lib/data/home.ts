import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Parker';

export const lastName = 'Fromm';

export const description =
	"Master in Software Engineering, Molecular Science from the University of California Berkeley. Proficient in C++ and Python, I have developed a strong foundation in backend and API development, " +
	"particularly in applications requiring high computational power and data integrity. My specialization in artificial intelligence and machine learning was applied extensively during my master's, " +
	"where I designed and implemented advanced molecular modeling simulations and software.\n\n" +
	"My experience is complemented by a capstone project with Raj Lab's Brain Networks Lab through the University of California, San Francisco, where I worked on " +
	"optimizing a neural network model capable of predicting tau protein progression in mice with the addition of genetic information. " +
	"As I transition into my role as an Associate Software Engineer at Northrop Grumman Space, I am eager to apply my technical skills and passion for AI to advance software " +
	"solutions in aerospace and defense sectors.";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/parkerfromm' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/parker-fromm-f11/'
	},
	{
		platform: Platform.Email,
		link: 'parkerfromm@gmail.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
