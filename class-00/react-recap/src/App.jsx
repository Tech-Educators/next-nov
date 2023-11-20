
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'

function App() {
  let image1 = 'https://i.pinimg.com/originals/3f/9b/80/3f9b8094324d88337643a3985c0457cd.jpg'

  let image2 = 'https://bemorepanda.com/files/2020-08-05/images/543140.jpeg'

  let scaryImage = 'https://pics.craiyon.com/2023-08-04/f8ff2b90c3714873ba66cf0f2d40a6c7.webp'
  return (
    <>
    <Header/>
    <Hero image={image1}/>
    <Hero image={image2}/>
    <Hero image={scaryImage}/>
    <Footer/>
    </>
  )
}

export default App
