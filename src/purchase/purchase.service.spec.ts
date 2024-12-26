import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseService } from './purchase.service';
import { PrismaPurchaseService } from './prisma.purchase.service';

describe('PurchaseService', () => {
    let service: PurchaseService;
    let prisma: PrismaPurchaseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PurchaseService, PrismaPurchaseService],
        }).compile();

        service = module.get<PurchaseService>(PurchaseService);
        prisma = module.get<PrismaPurchaseService>(PrismaPurchaseService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(prisma).toBeDefined();
    });
});
