import React from 'react'
import Button from '../commons/Button'
import InputField from '../commons/InputField'

function Confirmation(props) {
  let entDay = new Date(props.deleteUserData.ent);
  let formattedEnt = entDay.toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }); 
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">削除内容の確認</h2>
      <div className="input-container">
        <InputField value={props.deleteUserData.name} title="名前" />
        <InputField value={props.deleteUserData.bathingDay} title="入浴日" />
        <InputField value={formattedEnt} title="退所日" />
        <InputField value={props.deleteUserData.remarks} title="備考" />
      </div>
      <div className="confirmation-button-container">
        <Button className="confirmation-button confirmation-back" onClick={() => { props.onBack() }} title="戻る" />
        <Button className="confirmation-button confirmation-submit" onClick={() => { props.deleteUser(props.deleteUserData._id) }} title="削除" />
      </div>
    </div>

  )
}

export default Confirmation