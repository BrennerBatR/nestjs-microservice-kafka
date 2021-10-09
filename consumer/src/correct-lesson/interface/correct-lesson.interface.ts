export interface CorrectLessonMessage {
  value: {
    repositoryUrl: string;
    submissionId: string;
  };
}

export interface CorrectLessonResponse {
  submissionId: string;
  repositoryUrl: string;
  status: 'Pending' | 'Error' | 'Correct';
}
