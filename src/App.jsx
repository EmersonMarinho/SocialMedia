/* eslint-disable prettier/prettier */
import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Gabriel Buzzi'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tristique nisl, sit amet feugiat risus aliquet vel'
          />
          <Post
            author='Gabriel Buzzi'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus tristique nisl, sit amet feugiat risus aliquet vel'
          />
        </main>
      </div>
    </div>
  )
}
