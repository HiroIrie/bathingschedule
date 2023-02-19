import React from 'react'
import TableRow from './TableRow';


function Table(props) {
    const tableHeader = ["名前", "入浴曜日", "退所日", "備考欄"];
    

    return (
        
        <div>
            {props.data.usersData.length===0?<h3>Loading...</h3>:
            (
                <table>
                <thead>
                    <tr>
                        {tableHeader.map((item, index) => {
                            return (
                                <th key={index}>{item}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <TableRow usersData={props.data.usersData} day={props.day} />
                </tbody>
            </table>
            )
        }
            
        </div>
    )
}

export default Table