import './App.css';
import NewPreferences from './components/weather';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {

    
    return (
        <>
            {/* Insert componenets */}


            <BrowserRouter>
               


                   
                    <Routes>
                        <Route exact path="/" element={<NewPreferences/>} />
                       
                    </Routes>

                    
               

            </BrowserRouter>

        </>
    );
}

export default App;