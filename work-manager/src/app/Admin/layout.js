// import { Children } from "react";

export default function layout ({children})
{
    return(
        <div>
            <div><p>HEading </p></div>
            <div>{children}</div>
        </div>
    )
}