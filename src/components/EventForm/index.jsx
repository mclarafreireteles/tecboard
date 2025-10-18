import { FieldForm } from "../FieldForm"
import { InputForm } from "../InputForm"
import { LabelForm } from "../LabelForm"
import { TitleForm } from "../TitleForm"
import { ButtonForm } from "../ButtonForm"
import { SelectListForm } from "../SelectListForm"
import './event-form.style.css'

export function EventForm({ themes, onSubmit }) {

  function handleForm(formData) {
    console.log('opa, criar novo evento ', formData);
    const event = {
        cover: formData.get('cover'),
        theme: themes.find(function (item) {
          return item.id == formData.get('theme')
        }),
        date: new Date(formData.get('date')),
        title: formData.get('name')
    } 
    onSubmit(event);
  }

  return (
    <form className='form-event' action={handleForm}>
      <TitleForm>Preencha para criar um evento:</TitleForm>
      <div className="campos">
        <FieldForm>
          <LabelForm htmlFor="name">Nome do evento</LabelForm>
          <InputForm type="text" id='name' name='name' placeholder='Summer dev hits' />
        </FieldForm>
        <FieldForm>
          <LabelForm htmlFor="date">Data do evento</LabelForm>
          <InputForm type="date" id='date' name='date' />
        </FieldForm>
        <FieldForm>
          <LabelForm htmlFor="theme">Tema do evento</LabelForm>
          <SelectListForm options={themes} name="theme" id="theme" />
        </FieldForm>
        <FieldForm>
          <LabelForm htmlFor="cover">Endereço da imagem de capa</LabelForm>
          <InputForm type="text" id='cover' name='cover' placeholder='http://alguma.com/img.png' />
        </FieldForm>
      </div>
      <ButtonForm>Criar evento</ButtonForm>
    </form>
  )
}
