import './App.css'
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

  const events = [
    {
      cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      title: 'Mulheres no front'
    }
  ]

  function addEvent(event){

  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner/>
      <EventForm themes={themes} onSubmit={addEvent}/>
      {themes.map(function (theme) {
        return (
          <section key={theme.id}>
            <Theme theme={theme}/>
            {events.map(function (event, id) {
              return <EventCard key={id} event={event}/>
            })}
          </section>
        )
      })}
      
    </main>
  )
}

export default App