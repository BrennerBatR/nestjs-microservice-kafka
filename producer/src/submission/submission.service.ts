import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindConditions, Repository } from 'typeorm';
import { Submission, SubmissionStatus } from './entity/submission.entity';
import { CreateSubmissionDTO } from './submission.dto';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission)
    private readonly submissionRepository: Repository<Submission>,
  ) {}

  async create(submission: CreateSubmissionDTO): Promise<Submission> {
    return await this.submissionRepository
      .create({ ...submission, status: SubmissionStatus.Pending })
      .save();
  }

  async update(submission: Submission): Promise<Submission> {
    return await (await this.submissionRepository.preload(submission)).save();
  }

  async find(
    take: number,
    skip: number,
    status?: SubmissionStatus,
    dateStart?: string,
    dateEnd?: string,
  ): Promise<Submission[]> {
    const findConditions: FindConditions<Submission> = {};
    if (status) findConditions.status = status;
    if (dateStart) findConditions.createDate = Between(dateStart, dateEnd);

    return await this.submissionRepository.find({
      where: findConditions,
      take,
      skip,
      order: { createDate: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Submission> {
    return await this.submissionRepository.findOne(id);
  }
}
