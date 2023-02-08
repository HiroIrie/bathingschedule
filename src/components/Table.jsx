import React from 'react'
import TableRow from './TableRow';

function Table(props) {
    const tableHeader = ["名前", "入浴曜日", "入退所日", "備考欄"];
    const pasonData=[{name:"吉田 正雄",bathingDay:"水・日",ent:"2023/02/09",remarks:"入浴前血圧測定 機械浴"},{name:"日野 正雄",bathingDay:"月・金",ent:"2023/02/07",remarks:"入浴前血圧測定 機械浴 体重測定"},,{name:"山田 正雄",bathingDay:"木・日",ent:"2023/02/10",remarks:"入浴前血圧測定 機械浴 体重測定"}]
    return (
        <div>
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
                    
                    <TableRow pasonData={pasonData} day={props.day}/>
                </tbody>
            </table>
        </div>
    )
}

export default Table