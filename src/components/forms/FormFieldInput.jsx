import React from 'react'

function FormFieldInput({name,title,value,type,onChange,required,formErrors}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{title}</label>
            <input type={type} id={name} name={name} required={required} onChange={onChange} value={value} />
            <p className="errorMsg">{formErrors}</p>
        </div>
    )
}

export default FormFieldInput