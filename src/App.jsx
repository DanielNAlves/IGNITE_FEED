import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post author="Daniel Alves" content="Lorem ipsum dolor sit amet." />
					<Post author="Teste" content="Um post muito legal." />
				</main>
			</div>
		</div>
	);
}
