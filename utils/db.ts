import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

export const prisma = new PrismaClient();
