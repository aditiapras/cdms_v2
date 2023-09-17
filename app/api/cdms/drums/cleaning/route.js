import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import moment from "moment-timezone";

const prisma = new PrismaClient();

export async function PUT(req) {
  const { id_drum } = await req.json();
  const date_naik = moment().local().toISOString();
  const date_turun = moment().local().toISOString();

  const cleaning = await prisma.drum.update({
    where: {
      id_drum: id_drum,
    },
    data: {
      building_mc: "",
      status: "unuse",
      age: 0,
      date_naik: date_naik,
      date_turun: date_turun,
      reason: "",
    },
  });

  return NextResponse.json(cleaning);
}
