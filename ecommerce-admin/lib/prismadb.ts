import { PrismaClient } from "@/lib/generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}


const prismadb = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
