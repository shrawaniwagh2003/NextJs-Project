import { resolve } from "styled-jsx/css";

async function TakeTime()
{   
    await new Promise((resolve) => {
        setTimeout(resolve,3000)
    })
    
}


export default async function Admin(){
    await TakeTime();
    return (
        <div>
            <p>This is Admin Page</p>
        </div>
    );
}