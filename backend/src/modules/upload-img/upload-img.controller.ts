import { Controller, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage  } from 'multer';
import { join } from 'path';

@Controller('upload-img')
export class UploadImgController {

  @Post()
  @UseInterceptors(FilesInterceptor('files', 6, {
    storage: diskStorage({
      destination: join(process.cwd(), 'uploads'),
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = `${uniqueSuffix}-${file.originalname}`;
        callback(null, filename);
      },
    }),
  }))
  uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    console.log(`Uploads directory: ${join(process.cwd(), 'uploads')}`);
    console.log(files)
    return { message: 'Arquivos recebidos com sucesso!' };
  }
}
