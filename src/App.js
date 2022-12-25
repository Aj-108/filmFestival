import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom' ;

const Contact = lazy(() =>import('./Components/Contact/Contact'));
const Attraction = lazy(() =>import('./Components/Attractions/Attraction'));
const Venue = lazy(() =>import('./Components/Venue/Venue'));
const Committe = lazy(() =>import('./Components/Committe/Committe'));
const Jury = lazy(() =>import('./Components/Jury/Jury'));
const Guest = lazy(() =>import('./Components/Guest/Guest'));
const Schedule = lazy(() =>import('./Components/Schedule/Schedule'));
const SteringMembers = lazy(() =>import('./Components/SteringMembers/SteringMembers'));
// const HomeUffi = lazy(() => import('./Components/Uffi/HomeUffi'));



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/otherAttractions' element={<Attraction/>}></Route>
              <Route path='/venue' element={<Venue />}></Route>
              {/* <Route path='/about-uiffi' element={<HomeUffi/>}></Route> */}
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/committe' element={<Committe/>}></Route>
              <Route path='/jury' element={<Jury/>}></Route>
              <Route path='/schedule' element={<Schedule/>}></Route>
              <Route path='/guest' element={<Guest/>}></Route>
              <Route path='/steeringMembers' element={<SteringMembers/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
