import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { PrismaPurchaseService } from './prisma.purchase.service';

@Module({
    controllers: [PurchaseController],
    providers: [PurchaseService, PrismaPurchaseService],
})
export class PurchaseModule {}
