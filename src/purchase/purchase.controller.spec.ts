import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';

describe('PurchaseController', () => {
    let controller: PurchaseController;
    const myServiceMock = {
        findAll: jest.fn().mockReturnValue([]),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PurchaseController],
            providers: [
                {
                    provide: PurchaseService,
                    useValue: myServiceMock,
                },
            ],
        }).compile();

        controller = module.get<PurchaseController>(PurchaseController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
