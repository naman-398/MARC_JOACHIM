import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './components/Header';
import Itisnotyourfault from './components/Itisnotyourfault';
import Target from './components/Target';
import Yourex from './components/Yourex';
import Lawyer from './components/Lawyer';
import Takesection from './components/Takesection';
import Footer from './components/Footer';
import What from './components/What';
import Swiperone from './components/Swiperone';
import Swipertwo from './components/Swipertwo';
import Loader from './components/Loader';
import Backtotop from './components/Backtotop';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init(
      {once:true,
      duration:2000,}
    );
  }, [])
  return (
  <div  className=' overflow-hidden'>
    <Loader/>
    <Backtotop/>
<Header/>
<Itisnotyourfault/>
<What/>
<Target/>
<Swiperone/>
<Yourex/>
<Lawyer/>
<Swipertwo/>
<Takesection/>
<Footer/>
  </div>
  );
}

export default App;
