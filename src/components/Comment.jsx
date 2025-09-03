import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {

	function handleDeleteComment() {
		console.log('Deletar comentário');

		onDeleteComment(content);
	}

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false}
				src="https://github.com/danielnalves.png"
				alt=""
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Daniel Alves</strong>
							<time title="11 de maio às 08:30h" dateTime="2025-05-11 08:13:30">
								Cerca de 2 horas atrás
							</time>
						</div>

						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
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
