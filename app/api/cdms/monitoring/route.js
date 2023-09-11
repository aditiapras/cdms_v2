import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const url = new URL(req.url);
  const building_mc = url.searchParams.get("id");
  if (building_mc) {
    const monitoring = await prisma.monitoring.findUnique({
      where: {
        building_mc: building_mc,
      },
    });
    return NextResponse.json(monitoring);
  }
  const monitoring = await prisma.monitoring.findMany();
  return NextResponse.json(monitoring);
}

export async function PUT(req) {
  const data = await req.json();
  const { building_mc, status, id_left, id_right } = data;
  const monitoring = await prisma.monitoring.update({
    where: {
      building_mc: building_mc,
    },
    data: {
      status: status,
      id_left: id_left,
      id_right: id_right,
    },
  });
  return NextResponse.json(monitoring);
}
