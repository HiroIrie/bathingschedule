import React from 'react'

function FormFieldInput(props) {
    return (
        <div className="form-field">
            <label htmlFor={props.name}>{props.title}</label>
            <input type={props.type} id={props.name} name={props.name} required={props.required} onChange={props.onChange}/>
        </div>
    )
}

export default FormFieldInput