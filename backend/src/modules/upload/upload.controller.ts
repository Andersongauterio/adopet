import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import * as FormData from 'form-data';
import axios from 'axios';

@Controller('upload')
export class UploadController {

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const formData = new FormData();
    formData.append('image', file.buffer, file.originalname);

    try {
      const response = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          'Authorization': 'Client-ID 3f1526c6e224058',
          ...formData.getHeaders(),
        },
      });

      return response.data.data.link;
    } catch (error) {
      throw new Error('Erro ao fazer upload da imagem');
    }
  }
}
