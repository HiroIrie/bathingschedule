import React, { useState } from 'react'
import BathingUser from './BathingUser'
import Confirmation from './Confirmation';
import axios from 'axios';

function BathigUsersList(props) {
    const listHeader = ["名前", "入浴日", "退所日", "備考欄", "変更", "削除"];
    const [confirm, setConfirm] = useState(false);
    const [deleteUserData, setDeleteUserData] = useState({});
    const[error,setError]=useState(null);
    const[onloaded,setOnloaded]=useState(null)

    //利用者削除画面の切り替え及びデータの受け渡し
    const deleteConfirm = (data) => {
        setDeleteUserData(data);
        setConfirm(true);
    }

    //利用者データの削除の処理
    const deleteUser = (id) => {
        setOnloaded('onload');
        axios.delete(`/api/users/${id}`)
        .then(() => {
            console.log('完了');
            setOnloaded('completed');
        }).catch((err) => {
            setError(err);
        })
    }

    //利用者一覧画面に戻る処理
    const onBack=()=>{
        setConfirm(false);
    }

    if(error){
        return(
            <div className="error">エラーが発生しました{error.message}</div>
        )
    }
    if(onloaded===null){
        if(confirm===false){
            return (
                <div>
                    <h1>入浴者一覧</h1>
                    <table>
                        <tbody>
                            <tr>
                                {listHeader.map((item, index) => {
                                    return (
                                        <th key={index}>{item}</th>
                                    )
                                })}
                            </tr>
        
                            <BathingUser data={props.data} deleteConfirm={deleteConfirm}/>
        
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <Confirmation deleteUserData={deleteUserData} deleteUser={deleteUser} onBack={onBack}/>
        )
        }else if(onloaded==="onload"){
            return(
                <h1>Loading...</h1>
            )
        }else if(onloaded==="completed"){
            return(
                <h1>削除しました</h1>
            ) 
        }
    }
    

export default BathigUsersList