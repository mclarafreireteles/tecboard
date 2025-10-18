import './selectlist-form.style.css'

export function SelectListForm({ options, name, id }) {
    return (
        <select className="select" name={name} id={id} defaultValue="">
            <option className='option' value="" disabled>
                Selecione uma opção
            </option>
            {options.map((option) => (
                <option className='option' key={option.id} value={option.value}>
                    {option.name
                        .split(" ")
                        .map(
                            (word) =>
                                word.charAt(0).toLocaleUpperCase("pt-BR") +
                                word.slice(1).toLocaleLowerCase("pt-BR")
                        )
                        .join(" ")}
                </option>
            ))}
        </select>
    );
}