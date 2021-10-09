import { Module } from '@nestjs/common';
import { CorrectLessonModule } from './correct-lesson/correct-lesson.module';

@Module({
  imports: [CorrectLessonModule],
})
export class AppModule {}
