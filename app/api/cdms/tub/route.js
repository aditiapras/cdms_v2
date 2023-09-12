import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const tub = await prisma.tub.findMany();
  return NextResponse.json(tub);
}
