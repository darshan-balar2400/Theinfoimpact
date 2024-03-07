import dbConnect from "@/Utils/conn";
import ContactModel from "@/Models/ContactModel";
import { ErrorHandler } from "nodejs-corekit";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    let body = await req.json();
    
    if (!body.name || !body.message || !body.email || !body.subject) {
      throw new ErrorHandler("Please Enter Required Fields !", 404);
    }

    await ContactModel.create(body);

    return NextResponse.json(
      { success: true, message: `Your Ticket Has Been Submitted Successfully !` },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json({ success: false, message: e }, { status: 500 });
  }
}
