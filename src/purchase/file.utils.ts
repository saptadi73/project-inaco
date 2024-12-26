import { BadRequestException } from '@nestjs/common';
import { Request } from 'express';

export const FileNameEditor = (
    req: Request,
    file: any,
    callback: (error: any, filename) => void
) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const newFilename = uniqueSuffix + '-' + file.originalname;
    callback(null, newFilename);
};

export const ImageFileFilter = (
    req: Request,
    file: any,
    callback: (error: any, valid: boolean) => void
) => {
    if (!file.originalname || !file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new BadRequestException('file must be jpg|jpeg|png|gif'), false);
    }
    callback(null, true);
};
