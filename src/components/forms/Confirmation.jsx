import React from 'react'
import Button from '../commons/Button'
import InputField from '../commons/InputField'

function Confirmation({value,onRegist,onBack}) {
  return (
    <div className="confirmation-container">
  <h2 className="confirmation-title">入力内容の確認</h2>
  <div className="input-container">
    <InputField value={value.name} title="名前"/>
    <InputField value={value.birthingDay} title="入浴日"/>
    <InputField value={value.ent} title="退所日"/>
    <InputField value={value.remarks} title="備考"/>
  </div>
  <div className="confirmation-button-container">
    <Button className="confirmation-button confirmation-back" onClick={onBack} title="戻る"/>
    <Button className="confirmation-button confirmation-submit" onClick={onRegist} title="送信"/>
  </div>
</div>

  )
}

export default Confirmation