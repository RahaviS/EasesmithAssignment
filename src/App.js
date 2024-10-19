import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import ThankYouPage from './components/ThankYouPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/thankyou" element={<ThankYouPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
