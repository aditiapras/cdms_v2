import { NextResponse } from "next/server";
import moment from "moment-timezone";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { id_drum, building_mc, age, reason, pic, type } = body;
  const input_date = moment().local().toISOString();

  const history = await prisma.history.create({
    data: {
      id_drum,
      building_mc,
      age,
      reason,
      PIC: pic,
      type,
      date: input_date,
    },
  });

  return NextResponse.json({ message: "Success", data: history });
}

export async function GET(req) {
  const url = new URL(req.url);
  const type = url.searchParams.get("type");

  if (type) {
    const data = await prisma.history.findMany({
      where: {
        type: type,
      },
    });
    return NextResponse.json({ type, data });
  } else {
    const data = await prisma.history.findMany();
    return NextResponse.json(data);
  }
}
