import React from 'react';

function TableRow(props) {
    const today=new Date();
    return (
        props.usersData.map((item,index)=>{
            let entDay=new Date(item.ent);
            if(item.bathingDay.indexOf(props.day)!==-1 && entDay>today){
                const formattedEnt = entDay.toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' });
                return(
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.bathingDay}</td>
                    <td>{formattedEnt}</td>
                    <td>{item.remarks}</td>
                </tr>
                   )
            }
           return null
        })
        
    )
}

export default TableRow