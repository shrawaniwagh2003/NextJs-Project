import { NextResponse } from "next/server";

export function GET({request})
{return NextResponse.json({
    message:"work api getting data",
})

}