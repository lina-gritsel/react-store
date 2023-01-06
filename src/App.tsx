import { FC } from 'react'
import { Header } from './components/Header'
import { Content } from './components/Content'


const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}

export default App
