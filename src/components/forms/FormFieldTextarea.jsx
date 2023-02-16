import React from 'react'

function FormFieldTextarea(props) {
    return (
        <div className="form-field">
            <label htmlFor={props.name}>{props.title}</label>
            <textarea id={props.name} name={props.name} rows={props.rows} required={props.required} value={props.value} onChange={props.onChange}></textarea>
        </div>
    )
}

export default FormFieldTextarea