import {
  Submission,
  SubmissionStatus,
} from '../../src/submission/entity/submission.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateSubmissionDTO } from '../../src/submission/submission.dto';

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

it('just passes', () => {
  expect(true).toBe(true);
});

export const mockedImageHelper = {
  url: 'string',
  thumb128Url: 'string',
};

export const mockedSubmission = {
  id: uuidv4(),
  repositoryUrl: 'https://github.com/nestjs/backend-microservice',
  status: SubmissionStatus.Pending,
} as Submission;

export const mockedCreateSubmissionDTO = {
  repositoryUrl: 'https://github.com/nestjs/backend-microservice',
} as CreateSubmissionDTO;

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    remove: jest.fn((entity) => entity),
    delete: jest.fn((entity) => entity),
    findOne: jest.fn((entity) => entity),
    save: jest.fn((entity) => entity),
    create: jest.fn((entity) => entity),
    createImage: jest.fn((entity) => entity),
    preload: jest.fn((entity) => entity),
    findAndCount: jest.fn((entity) => entity),
    find: jest.fn((entity) => entity),
    findByIds: jest.fn((entity) => entity),
    count: jest.fn((entity) => entity),
  }),
);
