import './selectlist-form.style.css'

export function SelectListForm({ options, name, id}){
    return (
        <select className="select" name={name} id={id}>
            {options.map((option) => (
                <option className='option' key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}