import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Sitebar from '../sitebar/sitebar'
import './App.css'

function App(){
  return(
    <div className='container'>
      <Header/>
      <Main/>
      <Sitebar/>
      <Footer/>
    </div>
  )

}

export default App;