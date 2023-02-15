import React from 'react'
import TableRow from './TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Table(props) {
    const tableHeader = ["名前", "入浴曜日", "退所日", "備考欄"];
    const [error, setError] = useState(null);
    const [usersData, setUsersData] = useState([]);
    useEffect(() => {
        
            axios.get('/api/users').then(users => {
                setUsersData(users.data);
            }).catch(error=>{
                setError(error);
            })
    }
        , []);

    if (error) {
        return (
            <div className="error">エラーが発生しました{error.message}</div>
        )
    }

    return (
        
        <div>
            {usersData.length===0?<h3>Loading...</h3>:
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
                    <TableRow usersData={usersData} day={props.day} />
                </tbody>
            </table>
            )
        }
            
        </div>
    )
}

export default Table