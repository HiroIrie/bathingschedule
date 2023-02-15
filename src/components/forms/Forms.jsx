import React,{useState} from 'react'
import Button from '../commons/Button';
import FormFieldInput from './FormFieldInput';
import FormFieldSelect from './FormFieldSelect';
import FormFieldTextarea from './FormFieldTextarea';
import axios from 'axios';

function Forms() {
    const selectItems=["月 木","月 金","火 金","火 土","水 土","水 日","木 日"];
    const initialValues={name:'',bathingDay:'',ent:'',remarks:''};
    const [formvalues,setFormValues]=useState(initialValues);

    //formの変更をformvaluesに格納する処理
    const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormValues({
        ...formvalues,[name]:value
    })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
         axios.post('/api/users',formvalues).then(item=>{
            console.log(item.data);
         }).catch((error)=>{console.log(error)})
        }

    return (
        <div className="form-container">
            <form onSubmit={(e)=>{handleSubmit(e)}}>
               <FormFieldInput name="name" title="名前" type="text" required onChange={(e)=>{handleChange(e)}}/>

                <FormFieldSelect selectItems={selectItems} name="bathingDay" required onChange={(e)=>{handleChange(e)}}/>

                <FormFieldInput name="ent" title="退所日" type="date" required onChange={(e)=>{handleChange(e)}}/>

                <FormFieldTextarea name="remarks" title="備考" rows="4" onChange={(e)=>{handleChange(e)}}/>
                
                <Button type="submit" title="送信"/>
                
            </form>
        </div>

    )
}

export default Forms