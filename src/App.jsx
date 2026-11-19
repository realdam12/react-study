
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Nav from './components/Nav'
import Aside from './components/Aside'
import Article from './components/Article'

function App() {
  const getGreeting=(name)=>`안녕 ${name}`
  return (
    <main>
      <Header/>
      <Nav />
      <div className="content">
        <Section/>
      <Article />
      <Aside />
      </div>
      

      <Footer/>
    </main>
  )
}

export default App
