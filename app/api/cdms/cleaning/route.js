import { NextResponse } from "next/server";
import moment from "moment-timezone";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const { id_drum, parts, pic } = await req.json();
  const date_cleaning = moment().toISOString();

  const cleaning = await prisma.cleaning.create({
    data: {
      id_drum,
      date_cleaning,
      pic,
      parts: {
        create: parts,
      },
    },
  });

  return NextResponse.json(cleaning);
}

export async function GET(req) {
  const cleaning = await prisma.cleaning.findMany({
    include: {
      parts: true,
    },
  });
  return NextResponse.json(cleaning);
}
