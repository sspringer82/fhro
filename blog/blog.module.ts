import { Module } from '@nestjs/common';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
