import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import {
  CorrectLessonMessage,
  CorrectLessonResponse,
} from './interface/correct-lesson.interface';

@Injectable()
export class CorrectLessonService {
  async correctLesson(
    submissionId: string,
    repositoryUrl: string,
  ): Promise<CorrectLessonResponse> {
    let correctLessonResponse: CorrectLessonResponse = {
      submissionId: submissionId,
      repositoryUrl: repositoryUrl,
      status: 'Pending',
    };

    if (!repositoryUrl || !repositoryUrl.match(/github.com/))
      correctLessonResponse.status = 'Error';
    else if (repositoryUrl.split('github.com/')[1].split('/').length !== 2)
      correctLessonResponse.status = 'Error';
    else {
      correctLessonResponse.status = 'Correct';
    }

    return correctLessonResponse;
  }
}
