import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        try {
            await this.$connect();
        } catch (e) {
            Logger.error(e);
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    constructor() {
        super({
            errorFormat: 'pretty'
        });
    }
}
