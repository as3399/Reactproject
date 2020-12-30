import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

function App() {
    return (
        <div>
            <h1 className="navbar_title">List of Top 5 Web Series 2020</h1>

            <Card
                poster={Sdata[0].poster}
                sname={Sdata[0].sname}
                link={Sdata[0].link}
                title={Sdata[0].title}
            />
            <Card
                poster={Sdata[1].poster}
                sname={Sdata[1].sname}
                link={Sdata[1].link}
                title={Sdata[1].title}
            />
            <Card
                poster={Sdata[2].poster}
                sname={Sdata[2].sname}
                link={Sdata[2].link}
                title={Sdata[2].title} />
            <Card
                poster={Sdata[3].poster}
                sname={Sdata[3].sname}
                link={Sdata[3].link}
                title={Sdata[3].title}
            />
            <Card
           
                poster={Sdata[4].poster}
                sname={Sdata[4].sname}
                link={Sdata[4].link}
                title={Sdata[4].title}
            />
        </div>
    );
}
export default App;