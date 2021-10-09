import { Test, TestingModule } from '@nestjs/testing';
import { CorrectLessonController } from '../correct-lesson.controller';

describe('CorrectLessonController', () => {
  let controller: CorrectLessonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorrectLessonController],
    }).compile();

    controller = module.get<CorrectLessonController>(CorrectLessonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
