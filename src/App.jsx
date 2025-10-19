import './App.css'
import { useState } from 'react'
import { Banner } from './components/Banner'
import { EventForm } from './components/EventForm'
import { EventCard } from './components/EventCard'
import { Theme } from './components/Theme'

function App() {
  const themes = [
    {
      id: 1,
      name: 'front-end'
    },
    {
      id: 2,
      name: 'backend'
    },
    {
      id: 3,
      name: 'inteligência artificial'
    },
    {
      id: 4,
      name: 'cloud'
    },
    {
      id: 5,
      name: 'devops'
    },
    {
      id: 6,
      name: 'data science'
    },

  ]

  const [events, setEvents] = useState([
    {
      cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      title: 'Mulheres no front'
    }
  ])

  function addEvent(event) {
    setEvents([...events, event]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <EventForm themes={themes} onSubmit={addEvent} />
      <section className="container">
        {themes.map(function (theme) {
          if (!events.some(function(event){
              return event.theme.id == theme.id;
          })) {
            return null;
          }
          return (
            <section className='theme' key={theme.id}>
              <Theme theme={theme} />
              <div className="events">
                {events
                  .filter(function (event) {
                    return event.theme.id == theme.id;
                  })
                  .map(function (events, id) {
                  return <EventCard key={id} event={events} />
                })}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App