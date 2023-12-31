import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 
 const App = ()=> {
 const pageSize = 6;
 const country = "in";
  
  const [progress, setProgress] = useState(0)
     return (
      
       <div>
        <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        />
        
        <Routes>
          <Route exact path="/"      element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/business"      element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/entertainment"     element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/general"        element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/health"        element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science"       element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/sports"        element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/technology"      element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country={country} category="technology" />} />

        </Routes>
        </BrowserRouter>
       </div>
      
     )
   }
export default App;
