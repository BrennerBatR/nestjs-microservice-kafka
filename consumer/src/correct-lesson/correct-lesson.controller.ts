import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CorrectLessonService } from './correct-lesson.service';
import {
  CorrectLessonMessage,
  CorrectLessonResponse,
} from './interface/correct-lesson.interface';

@Controller()
export class CorrectLessonController {
  constructor(private readonly correctLessonService: CorrectLessonService) {}

  @MessagePattern('microservice.correction')
  async correctLesson(
    @Payload() message: CorrectLessonMessage,
  ): Promise<CorrectLessonResponse> {
    const { submissionId, repositoryUrl } = message.value;
    try {
      return await this.correctLessonService.correctLesson(
        submissionId,
        repositoryUrl,
      );
    } catch (e) {
      return {
        submissionId: message.value.submissionId,
        repositoryUrl: message.value.repositoryUrl,
        status: 'Error',
      };
    }
  }
}
