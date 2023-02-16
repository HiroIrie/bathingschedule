import React, { useState } from 'react'
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
    const [confirm, setConfirm] = useState(null);

    //formの変更をformvaluesに格納する処理
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues, [name]: value
        })
    }

    //送信画面へ移動
    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirm("comfirm");
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
        setConfirm(null);
    }

    if (error) {
        return (
            <div className="error">エラーが発生しました{error.message}</div>
        )
    }
    if (onloaded === null) {
        if (confirm === null) {
            return (
                <div className="form-container">
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <FormFieldInput name="name" title="名前" value={formValues.name} type="text" required onChange={(e) => { handleChange(e) }} />

                        <FormFieldSelect selectItems={selectItems} name="bathingDay" value={formValues.bathingDay} required onChange={(e) => { handleChange(e) }} />

                        <FormFieldInput name="ent" title="退所日" type="date" value={formValues.ent} required onChange={(e) => { handleChange(e) }} />

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