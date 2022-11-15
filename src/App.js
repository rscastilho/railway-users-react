import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './Router/RoutesApp';


function App() {
  return (
    <>
      <BrowserRouter>
      
        {/* <Login/> */}
          <RoutesApp/>
        
        
      </BrowserRouter>
    </>
  );
}

export default App;
