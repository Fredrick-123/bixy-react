
import './App.css'
import About from './components/about';
import Features from './components/features';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
import NewsLetter from './components/newsLetter';
import Pricing from './components/pricing';



function App() {



  return (
    <>
      {/*Create component and pages*/}
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <NewsLetter />
      <Footer />


    </>
  )
}

export default App
