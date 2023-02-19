import React from 'react'

function BathingUser(props) {
    const{usersData}=props.data;
    return (
        usersData.map((item,index)=>{
            let entDay= new Date(item.ent);
            let formattedEnt = entDay.toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
            return(
                <tr key={index}>
                <td>{item.name}</td>
                <td>{item.bathingDay}</td>
                <td>{formattedEnt}</td>
                <td>{item.remarks}</td>
                <td><a href="#">変更</a></td>
                <td><a href="#" onClick={()=>{props.deleteConfirm(item)}}>削除</a></td>
            </tr>
            )
        })
       
    )
}

export default BathingUser