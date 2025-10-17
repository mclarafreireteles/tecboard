import './field-form.style.css'

export function FieldForm({ children }){
  return (
    <fieldset className="field">
      {children}
    </fieldset>
  )
}