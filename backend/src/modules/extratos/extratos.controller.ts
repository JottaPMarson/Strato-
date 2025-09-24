import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('extratos')
export class ExtratosController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file?: Express.Multer.File) {
    return { status: 'ok', filename: file?.originalname ?? 'none', size: file?.size ?? 0 };
  }
}


