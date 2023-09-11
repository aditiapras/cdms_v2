import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import moment, { now } from "moment-timezone";

const prisma = new PrismaClient();

export async function GET(req) {
  const url = new URL(req.url);
  const id_drum = url.searchParams.get("id");
  if (id_drum) {
    const drum = await prisma.drum.findUnique({
      where: {
        id_drum: id_drum,
      },
    });
    return NextResponse.json(drum);
  }
  const drums = await prisma.drum.findMany();
  return NextResponse.json(drums);
}

export async function PUT(req) {
  const data = await req.json();

  const { id_drum, building_mc, status, age, reason, method } = data;

  if (method == "naik") {
    const naik = await prisma.drum.update({
      where: {
        id_drum: id_drum,
      },
      data: {
        building_mc: building_mc,
        status: status,
        date_naik: moment().local().toISOString(),
      },
    });

    return NextResponse.json(naik);
  } else {
    const turun = await prisma.drum.update({
      where: {
        id_drum: id_drum,
      },
      data: {
        building_mc: building_mc,
        status: status,
        age: age,
        date_turun: moment().local().toISOString(),
        reason: reason,
      },
    });
    return NextResponse.json(turun);
  }
}
