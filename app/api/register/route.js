import { NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { nik, username, password, workgroup } = body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const data = await prisma.user.create({
      data: {
        nik,
        username,
        password: hashPassword,
        workgroup,
      },
    });
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json({
          registered: false,
          error: "NIK sudah terdaftar",
        });
      }
    }
  }
}
