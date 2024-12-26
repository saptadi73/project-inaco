import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import { PrismaPurchaseService } from './prisma.purchase.service';

@Injectable()
export class PurchaseService {
    constructor(private readonly prisma: PrismaPurchaseService) {}

    async importExcel(filePath: string): Promise<void> {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        const worksheet = workbook.getWorksheet(1);

        const purchaseData = [];

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) return; // Skip header row

            // Safe handling for row.values
            const values = Array.isArray(row.values) ? row.values.slice(1) : [];
            const [
                nomor,
                description,
                id_material,
                delivery_date,
                id_currency,
                price,
                quantity,
                amount,
                id_top,
            ] = values;

            if (nomor && id_material && price) {
                purchaseData.push({
                    nomor,
                    description,
                    id_material: +id_material,
                    delivery_date,
                    id_currency: +id_currency,
                    price: +price,
                    quantity: +quantity,
                    amount: +amount,
                    id_top: +id_top,
                });
            }
        });
        console.log(purchaseData[0]);

        // await this.prisma.purchase.createMany({ data: purchaseData });
    }
}
