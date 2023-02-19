import React, { useEffect, useState } from 'react'
import Button from '../commons/Button';
import FormFieldInput from './FormFieldInput';
import FormFieldSelect from './FormFieldSelect';
import FormFieldTextarea from './FormFieldTextarea';
import axios from 'axios';
import Confirmation from './Confirmation';

function Forms() {
    const selectItems = ["月 木", "月 金", "火 金", "火 土", "水 土", "水 日", "木 日"];
    const initialValues = { name: '', bathingDay: '', ent: '', remarks: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState(null);
    const [onloaded, setOnloaded] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const[formErrors,setFormErrors]=useState({});
    const[isSumit,setIsSubmit]=useState(false);

    //formの変更をformvaluesに格納する処理
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues, [name]: value
        })
        console.log(formValues)
    }

    //送信画面へ移動
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(isSumit)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0&&isSumit) {
          setConfirm(true);
        }
      }, [formErrors]);


    //バリデーション関数
    const validate=(values)=>{
      const errors={};
      const today=new Date();
      const ent=new Date(values.ent);
      console.log(today);
      if(!values.name){
        errors.name="*名前を入力して下さい"
      }
      if(!values.bathingDay){
        errors.bathingDay="*入浴日を設定して下さい"
      }
      if(!values.ent){
        errors.ent="*退所日を設定して下さい"
      }else if(ent<today){
        errors.ent="*退所日は本日よりも後の日で設定して下さい"
      }
      return errors;
    }

    //データベースへ保存
    const handleRegist = async () => {
        setOnloaded("onload");
        try {
            await axios.post('/api/users', formValues);
            setFormValues(initialValues);
            setOnloaded("completed");
        } catch (error) {
            setError(error);
        }
    }

    //入力画面に戻る処理
    const handleBack = () => {
        setConfirm(false);
        setIsSubmit(false);
    }

    if (error) {
        return (
            <div className="error">エラーが発生しました{error.message}</div>
        )
    }
    if (onloaded === null) {
        if (confirm===false) {
            return (
                <div className="form-container">
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <FormFieldInput name="name" title="名前" value={formValues.name} type="text"  onChange={(e) => { handleChange(e) }} formErrors={formErrors.name}/>

                        <FormFieldSelect selectItems={selectItems} name="bathingDay" value={formValues.bathingDay}  onChange={(e) => { handleChange(e) }}  formErrors={formErrors.bathingDay}/>

                        <FormFieldInput name="ent" title="退所日" type="date" value={formValues.ent}  onChange={(e) => { handleChange(e) }} formErrors={formErrors.ent} />

                        <FormFieldTextarea name="remarks" title="備考" rows="4" value={formValues.remarks} onChange={(e) => { handleChange(e) }} />

                        <Button type="submit" title="送信画面へ" />

                    </form>
                </div>

            )
        }
        return (
            <Confirmation value={formValues} onRegist={handleRegist} onBack={handleBack}/>
        )


    } else if (onloaded === "onload") {
        return (
            <h3>Loading...</h3>
        )
    } else if (onloaded === "completed") {
        return (
            <h3>送信が完了しました</h3>
        )

    }

}

export default Forms