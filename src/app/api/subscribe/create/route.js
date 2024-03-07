import dbConnect from "@/Utils/conn";
import SubscribeModel from "@/Models/SubscribeModel";
import { ErrorHandler } from "nodejs-corekit";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    let body = await req.json();
    console.log(body);
    if (!body.email) {
      throw new ErrorHandler("Please Enter Email Address !", 404);
    }

    let isEmail = await SubscribeModel.find({ email: body.email });

    if (isEmail) {
      return NextResponse.json(
        { success: false, message: "Email Already Exists !" },
        { status: 404 }
      );
    }

    await SubscribeModel.create(body);

    return NextResponse.json(
      { success: true, message: `${body.email} subscriberd successfully !` },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json({ success: false, message: e }, { status: 500 });
  }
}
