import React from 'react';

function TableRow(props) {
    const today=new Date();
    return (
        props.pasonData.map((item,index)=>{
            let entDay=new Date(item.ent);
            if(item.bathingDay.indexOf(props.day)!==-1 && entDay>today){
                return(
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.bathingDay}</td>
                    <td>{item.ent}</td>
                    <td>{item.remarks}</td>
                </tr>
                   )
            }
           return
        })
        
    )
}

export default TableRow