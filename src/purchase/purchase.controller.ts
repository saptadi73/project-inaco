import { Controller, Get, Header, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PurchaseService } from './purchase.service';
import { diskStorage } from 'multer';
import { FileNameEditor } from './file.utils';

@Controller('purchase')
export class PurchaseController {
    constructor(private readonly purchaseService: PurchaseService) {}

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                filename: FileNameEditor,
                destination: './upload',
            }),
            limits: {
                fileSize: 1000 * 1000 * 10,
            },
        })
    )
    async uploadExcel(@UploadedFile() file: Express.Multer.File) {
        try {
            const filePath = file.path; // Asumsikan file disimpan sementara
            await this.purchaseService.importExcel(filePath);
            return { message: 'Data imported successfully!' };
        } catch (error) {
            return 'Error Bos' + error;
        }
    }
    @Get('pertama')
    async pertama() {
        return 'hello pasti dong';
    }

    @Post('kedua')
    @Header('Content-Type', 'application/json')
    async CobaTest() {
        return 'bisa nih';
    }
}
