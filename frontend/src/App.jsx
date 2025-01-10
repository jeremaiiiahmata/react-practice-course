import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header/'
import Footer from './components/Footer'

import FormPage from './pages/FormPage'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'

function App() {

  const handleClick = () => {
    alert("Submitted")
  }

  return (
    <Router>

    <Header info="Movie Review"/>  
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/movie/:id' element={<MoviePage/>} />
            <Route path='/add' element={<FormPage/>} exact/>
          </Routes>
        </Container>
      </main>
    <Footer trademark="Copyright by jeremaiiiahmata"/>   
    </Router>
  )
}

export default App;
