import { Test, TestingModule } from '@nestjs/testing';
import { CorrectLessonService } from '../correct-lesson.service';

describe('CorrectLessonService', () => {
  let service: CorrectLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorrectLessonService],
    }).compile();

    service = module.get<CorrectLessonService>(CorrectLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
