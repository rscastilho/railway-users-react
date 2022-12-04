import './App.css';
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './Router/RoutesApp';
import { UserContextProvider } from './context/UserContext';


function App() {
    return (
        <>
            <UserContextProvider>
                <BrowserRouter>
                    <RoutesApp />
                </BrowserRouter>
            </UserContextProvider>
        </>
    );
}

export default App;
