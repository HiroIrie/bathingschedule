import React from 'react'

function FormFieldSelect({name,title,required,value,onChange,selectItems,formErrors}) {
    return (
        <div className="form-field">
            <label htmlFor={name}>{title}</label>
            <select id={name} name={name} required={required} value={value} onChange={onChange}>
                <option value="">選択してください</option>
                {selectItems.map((item, index) => {
                    return(
                        <option key={index} value={item}>{item}</option>
                    )       
                })}
            </select>
            <p className="errorMsg">{formErrors}</p>
        </div>
    )
}

export default FormFieldSelect