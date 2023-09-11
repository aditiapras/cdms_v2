import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
  const { nik } = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: {
        nik,
      },
    });
    if (nik == user.nik) {
      return NextResponse.json(user);
    }
  } catch (error) {
    return NextResponse.json({
      message: "failed",
      data: "Oops! Wrong Email or Password",
    });
  }
}
