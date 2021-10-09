import { InputType, Field, OmitType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Submission } from './entity/submission.entity';

@InputType()
export class CreateSubmissionDTO extends OmitType(Submission, [
  'id',
  'createDate',
  'updateDate',
  'status',
]) {
  @ApiProperty()
  @Field()
  repositoryUrl: string;
}
