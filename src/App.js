import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tour from './components/Tour';
import Main from './components/Main';
import Tours from './components/Tours';
import Mytours from './components/Mytours';
import Addtours from './components/Addtours';
import Viewdetails from './components/Viewdetails';
import Notfound from './components/Notfound';
import Confirmbooking from './components/Confirmbooking';
import Updatebooking from './components/Updatebooking';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tour/>} />
        <Route path="/Main"element={<Main/>}/>
        <Route path="/Tours"element={<Tours/>}/>
        <Route path="/Tours/:locationName" element={<Tours />} />
        <Route path="/Mytours"element={<Mytours/>}/>
        <Route path="/Addtours"element={<Addtours/>}/>
        <Route path="/confirm"element={<Confirmbooking/>}/>
        <Route path="/notfound/:locationName" element={<Notfound />} />
        <Route path="/update"element={<Updatebooking/>}/>
        <Route path="/viewdetails/:id" element={<Viewdetails/>} />
        
      
      </Routes>
    </Router>
  );
}

export default App;
/////rooh