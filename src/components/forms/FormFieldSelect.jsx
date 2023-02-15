import React from 'react'

function FormFieldSelect(props) {
    return (
        <div className="form-field">
            <label htmlFor={props.name}>{props.title}</label>
            <select id={props.name} name={props.name} required={props.required} onChange={props.onChange}>
                <option value="">選択してください</option>
                {props.selectItems.map((item, index) => {
                    return(
                        <option key={index} value={item}>{item}</option>
                    )       
                })}
            </select>
        </div>
    )
}

export default FormFieldSelect