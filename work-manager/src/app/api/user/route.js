import { NextResponse } from "next/server";

export function GET() {
  const user = [
    { name: "shrawni wagh",
     phone: "123", 
     course: "java" 
    },
    { name: " wagh",
    phone: "1237", 
    course: "java1" 
   },
   { name: "wani wagh",
   phone: "12345", 
   course: "java2" 
  },

];
return NextResponse.json(user);
}

export function POST() {}

export function DELETE(request) {
    console.log("api is deleted ");
    return NextResponse.json({message: "deleted ", status: "true"},{status: 201, statusText: "status text"})
}

export function PUT() {}
