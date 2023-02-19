import React from 'react'

function FormFieldTextarea({name,title,rows,required,value,onChange}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{title}</label>
            <textarea id={name} name={name} rows={rows} required={required} value={value} onChange={onChange}></textarea>
        </div>
    )
}

export default FormFieldTextarea