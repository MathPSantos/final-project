import styles from './styles.module.scss'

export function Sidebar() {
  return(
    <div>
      <aside className={styles.container}>
        <div className={styles.content}>
          <h2>Progresso do cadastro!</h2>

          <ul>
            <li>
              <span>1</span>
              <p>Dados pessoais</p>
            </li>

            <li className={styles.green}>
              <span>2</span>
              <p>Formulário</p>
            </li>

            <li className={styles.cyan}>
              <span>3</span>
              <p>Indicações de cursos</p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}