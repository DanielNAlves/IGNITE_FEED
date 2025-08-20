import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
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
				<p>Fala galeraa 👋</p>
				<p>Acabei de subir mais um projeto no meu portifa.</p>
				<p>
					É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do
					projeto é DoctorCare 🚀{" "}
				</p>
				<pre>
					👉 <a href="#">jane.design/doctorcare</a>
				</pre>

				<pre>
					<a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
					<a href="#">#rocketseat</a>
				</pre>
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
