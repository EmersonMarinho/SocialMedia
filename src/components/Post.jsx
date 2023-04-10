/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src='https://avatars.githubusercontent.com/u/88339170?v='
          />
          <div className={styles.authorInfo}>
            <strong>Emerson Marinho</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title='10 de Abril as 8 e 13 da manhã'
          dateTime='2023-04-10 08:13:00'
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          accusantium eaque odio ipsa unde porro at et, reprehenderit numquam
          ratione iure.
        </p>

        <p>
          {' '}
          <a href='#'>Teste.com</a>
        </p>

        <p>
          <a href='#'>#Hello world</a>
        </p>
      </div>
    </article>
  )
}
