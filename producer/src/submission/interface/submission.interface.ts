export interface CorrectLessonMessage {
  value: {
    submissionId: string;
    repositoryUrl: string;
  };
}

export interface CorrectLessonResponse {
  submissionId: string;
  repositoryUrl: string;
  status: 'Pending' | 'Error' | 'Correct';
}
