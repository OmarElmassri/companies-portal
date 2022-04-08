import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) { }
}
