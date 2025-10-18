import './theme.style.css'

export function Theme({ theme }){
    return(
        <h3 className='title'>{theme.name}</h3>
    )
}