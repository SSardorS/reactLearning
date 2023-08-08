import { useState } from "react";
import Title from "./components/Title";


function App() {

  const [showContent, setShowContent] = useState(true)

  const [events, setEvents] = useState([
    {title: "world", id:1},
    {title: "hello", id:2}
  ]) 

  const handleDelete = (id) =>{
    // const filteredEvents = events.filter((event) => {
    //   return event.id !== id
    // })

    // setEvents(filteredEvents)

    setEvents((props) => {
      return props.filter((event) => {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">

      <Title />

      {showContent && <button onClick={()=> setShowContent(false)}>Hide content</button>}
      {!showContent && <button onClick={()=> setShowContent(true)}>show</button>}
      {showContent && <div>
        {events.length===0 && <h3>Empty</h3>}
        {events.map((event)=>{
          return(
            <div key={event.id}>
              <br/>
              <h2 key={event.id}>{event.title}</h2>
              <button onClick={() => handleDelete(event.id)}>delete</button>
            </div>        
          )
          })}
        </div>}
    </div>
  );
}

export default App;
