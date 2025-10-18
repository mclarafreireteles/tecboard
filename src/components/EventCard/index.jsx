import './event-card.style.css'

export function EventCard ({ event }){
    console.log(event);
    return (
        <div className='card-event'>
            <img src={event.cover} alt={event.title} />
            <div className='body-card-event'>
                <p className="tag">
                    {event.theme.name}
                </p>
                <p className='date-card-event'>
                    {event.date.toLocaleDateString('pt-BR')}
                </p>
                <h4 className='title-card'>
                    {event.title}
                </h4>
            </div>
        </div>
    )
}