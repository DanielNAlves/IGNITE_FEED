import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img
				className={styles.avatar}
				src="https://github.com/danielnalves.png"
				alt=""
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTimes}>
							<strong>Daniel Alves</strong>
							<time title="11 de maio às 08:30h" dateTime="2025-05-11 08:13:30">
								Cerca de 2 horas atrás
							</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>Muito bom Devon, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
