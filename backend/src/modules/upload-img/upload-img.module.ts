import { Module } from '@nestjs/common';
import { UploadImgController } from './upload-img.controller';

@Module({
  controllers: [UploadImgController]
})
export class UploadImgModule { }
