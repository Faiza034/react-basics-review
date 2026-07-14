import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Name from './components/Name'
import './App.css'
import Map from './components/Map'
import Conditions from './components/Conditions'
import Props from './components/Props'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)
  //const obj = {

  //ram: "16GB",
  //storage: "512GB"

  //}
 const events = [
    "React Workshop",
    "API Integration Session",
    "UI Review Meeting",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event List</h1>

      {events.length > 0 ? (
        events.map((event, index) => (
          <Events key={index} title={event} />
        ))
      ) : (
        <p>No Events Available</p>
      )}
    </div>
  );


  
    {/*<>
      <Name />
      <Events />
      {/* <Map /> 
      <Conditions />
      <Props name="iphone-16" price={99000} color="black" data={obj} />
      <Props name="iphone-17" price={99000} color="golden" data={obj} />
      <Props name="iphone-14" price={99000} color="blue" data={obj} /> 
    </>*/}
  
}

export default App
