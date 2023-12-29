import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Frequently from './components/Frequently';
import Footer from './components/Footer';
import Frame from './components/Frame';
import HowItWork from './components/HowItWork';
import QuoteSection from './components/QuoteSection';

function App() {
  return (
    <div className='mx-auto w-full md:w-[1024px] lg:w-[1440px]'>
      <Home/>
      <Frame/>
      <HowItWork/>
      <QuoteSection/>
      <Pricing/>
      <Frequently/>
      <Footer/>
    </div>
  );
}

export default App;
