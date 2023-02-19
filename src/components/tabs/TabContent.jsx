import React from 'react';
import Table from './Table';

function TabContent(props) {
  return (
    props.daysOfWeek.map((day,index)=>{
        return(
           <div key={index}>
           {
             props.activeTab === day && (
                <div>
                  <h2>{day}曜日の入浴者</h2>
                  <Table data={props.data} day={day}/>
                </div>
              )
            }
           </div>
            
        )
    }) 
  )
}

export default TabContent