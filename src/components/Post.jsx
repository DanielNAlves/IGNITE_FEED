import { Avatar } from './Avatar';
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
	console.log(props);
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar
						src="https://github.com/danielnalves.png"
						alt="Daniel Alves"
					/>

					<div className={styles.authorInfo}>
						<strong>Daniel Alves</strong>
						<span>Web Developer</span>
					</div>
				</div>

				<time title="11 de maio às 08:30h" dateTime="2025-05-11 08:13:30">
					Publicado há 1 hora
				</time>
			</header>

			<div className={styles.content}>
				
			</div>

			<form className={styles.commentForms}>
				<strong>Deixe seu Feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
			</div>
		</article>
	);
}
