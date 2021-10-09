import { Module } from '@nestjs/common';
import { CorrectLessonService } from './correct-lesson.service';
import { CorrectLessonController } from './correct-lesson.controller';

@Module({
  providers: [CorrectLessonService],
  controllers: [CorrectLessonController]
})
export class CorrectLessonModule {}
