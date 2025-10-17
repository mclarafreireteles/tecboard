import { FieldForm } from "../FieldForm"
import { InputForm } from "../InputForm"
import { LabelForm } from "../LabelForm"
import { TitleForm } from "../TitleForm"
import { ButtonForm } from "../ButtonForm"
import { SelectListForm } from "../SelectListForm"
import './event-form.style.css'

export function EventForm(){
  const options = [
    { name: "IA", value: "ia" },
    { name: "Front-End", value: "frontend" },
  ]

  return (
    <form action="" className='form-event'>
      <TitleForm>Preencha para criar um evento:</TitleForm>
      <div className="campos">
        <FieldForm>
          <LabelForm htmlFor="name">Qual o nome do evento?</LabelForm>
          <InputForm type="text" id='name' name='name' placeholder='Summer dev hits' />
        </FieldForm>
        <FieldForm>
          <LabelForm htmlFor="date">Data do evento</LabelForm>
          <InputForm type="date" id='date' name='date' />
        </FieldForm>
        <FieldForm>
          <LabelForm htmlFor="theme">Tema do evento</LabelForm>
          <SelectListForm options={options} name="theme" id="theme"/>
        </FieldForm>
      </div>
      <ButtonForm>Criar evento</ButtonForm>
    </form>
  )
}
