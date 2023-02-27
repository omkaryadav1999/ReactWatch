import React, { useState } from "react";

function App() {
    let timer = new Date().toLocaleTimeString()
    const [time, setTime] = useState(timer);

    const updateTime = () => {
        let times = new Date().toLocaleTimeString();
        setTime(times)
    }
    setInterval(updateTime, 1000)
    return (
        <>
            <div>
                <h1>Watch</h1>
                <div className="timeDiv">
                    <h1>Time: {time}</h1>
                </div>
            </div>
        </>
    )
}

export default App;