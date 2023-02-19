import React, { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

function Tabs(props) {
    const today=new Date();
    const daysOfWeek = ["月", "火", "水", "木", "金", "土", "日"];
    const dayOfWeek=daysOfWeek[today.getUTCDay()-1];
    const [activeTab, setActiveTab] = useState(dayOfWeek);

    function handleClick(tab) {
        setActiveTab(tab);
    }

    return (
        <div className="tabs-container">
            <div className="tabs">
                {daysOfWeek.map((day,index) => {
                    return (
                        <TabButton key={index} activeTab={activeTab}  handleClick={handleClick} day={day} />
                    )
                })}
            </div>
            <div className="tab-content">
                <TabContent data={props.data} daysOfWeek={daysOfWeek} activeTab={activeTab} />
            </div>


        </div>
    );
}

export default Tabs;