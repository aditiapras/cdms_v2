import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  const building_mc = new URL(req.url).searchParams.get("id");

  if (!building_mc) {
    const machine = await prisma.machine.findMany();
    return NextResponse.json(machine);
  } else {
    const machine = await prisma.machine.findUnique({
      where: {
        building_mc: building_mc,
      },
    });
    return NextResponse.json(machine);
  }
}
