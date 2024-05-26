export default function layout ({children})
{
    return(
        <div>
            <div><p>Heading </p></div>
            <div>{children}</div>
        </div>
    )
}