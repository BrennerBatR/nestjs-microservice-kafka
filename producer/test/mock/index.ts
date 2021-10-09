import { microservice } from '../../src/microservice/entity/microservice.entity';
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

export const mockedmicroservice = {
  id: uuidv4(),
  description: 'description',
  title: 'title',
} as microservice;

export const mockedSubmission = {
  id: uuidv4(),
  repositoryUrl: 'https://github.com/nestjs/backend-microservice',
  status: SubmissionStatus.Pending,
  grade: Math.floor(Math.random() * 10) + 1,
  microservice: mockedmicroservice,
} as Submission;

export const mockedCreateSubmissionDTO = {
  repositoryUrl: 'https://github.com/nestjs/backend-microservice',
  microserviceId: mockedmicroservice.id,
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
