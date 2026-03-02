import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const contacts = await prisma.contact.findMany();
  return NextResponse.json(contacts);
}

export async function POST(request: Request) {
  const { name, email, company } = await request.json();
  const newContact = await prisma.contact.create({
    data: { name, email, company },
  });
  return NextResponse.json(newContact, { status: 201 });
}
