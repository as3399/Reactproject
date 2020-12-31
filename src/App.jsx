import React from 'react'
import Sdata from './Sdata'
import Card from './Card'
import Foot from './Foot'

function App() {
    return (
        <div>
        <div className="navbar">
           
            <h1>List of Top 5 Web Series 2020</h1>
                     
                    
        </div>
                
        
       
        {Sdata.map((val, index) => {
            console.log(index);
            return (
                <Card
                    key={val.id}
                    poster={val.poster}
                    sname={val.sname}
                    link={val.link}
                    title={val.title}
                />
            )
        }
        )}
        <Foot />
        </div>
        
        
    )
}

export default App;