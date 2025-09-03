import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/DanielNAlves.png",
			nome: "Daniel Alves",
			role: "Dev front-end"
		},

		content: [
		{type: 'paragraph', content: 'Fala galeraa 👋'},
		{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'}, 
		{type: 'link', content: '👉 ane.design/doctorcare'},
		],

		publishedAt: new Date('2019-11-23 16:00:00'),

	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			nome: "Daniel V N Alves",
			role: "Dev front-end"
		},

		content: [
		{type: 'paragraph', content: 'Fala galeraa 👋'},
		{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'}, 
		{type: 'link', content: '👉 ane.design/doctorcare'},		
		],

		publishedAt: new Date('2025-08-26 16:30:00'),

	},
	{
		id: 3,
		author: {
			avatarUrl: "https://github.com/maykbrito.png",
			nome: "Daniel V N Alves",
			role: "Dev front-end"
		},

		content: [
		{type: 'paragraph', content: 'Fala galeraa 👋'},
		{type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'}, 
		{type: 'link', content: '👉 ane.design/doctorcare'},
		],

		publishedAt: new Date('2025-08-21 15:30:00'),

	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => {
					return	(
						<Post 
							key={post.id}
						  author={post.author}
						  content={post.content}
						  publishedAt={post.publishedAt}
					  />)
					})}
				</main>
			</div>
		</div>
	);
}
