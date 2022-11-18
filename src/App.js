import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './Router/RoutesApp';


function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}

export default App;
