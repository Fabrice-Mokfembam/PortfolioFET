import './App.css';
import Header from './component/header'
//import HeaderSocial from './component/HeaderSocial'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Projects from './component/projects/Projects'
import Testimonial from './component/testimonial/Testimonial'
import Contact from './component/Contact'
import Footer from './component/footer/Footer'
function App() {
return (
<>
<Header/>
<Navbar/>
<About/>
<Experience/>
<Services/>
<Portfolio/>
<Projects/>
<Testimonial/>
<Contact/>
<Footer/>
</>
);
}
export default App;