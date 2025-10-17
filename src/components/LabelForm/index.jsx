import './label-form.style.css'

export function LabelForm({ children, htmlFor }){
  return(
    <label className='label-form' htmlFor={htmlFor}>
      {children}
    </label>
  )
}