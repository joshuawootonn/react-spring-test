import { Moment } from 'moment';

export interface User {
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
  permissions: string[];
}

export interface UseAuth0 {
  loading: boolean;
  user: User;
  isAuthenticated: boolean;
  loginWithRedirect: () => void;
  logout: () => void;
}

export interface Exam {
  examId: number;
  numberOfRemainingExams: number;
  imageUrl0: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  analysisResultCode: AnalysisResultCode;
}
export type AnalysisResultCode =
  | SufficientQuality
  | PoorExamQuality
  | NumberOfLeftAndRightEyesInsufficient
  | PoorOpticDiskLocation
  | DuplicateImage
  | ImageAnalysisFailed
  | ExamAnalysisFailed
  | NoSignsOfDisease
  | SignsOfModerateDiabeticRetinopathyWithNoVisionThreateningDiabeticRetinopathy
  | VisionThreateningDiabeticRetinopathyDetected;
export type SufficientQuality = 0;
export type PoorExamQuality = 1;
export type NumberOfLeftAndRightEyesInsufficient = 2;
export type PoorOpticDiskLocation = 3;
export type DuplicateImage = 4;
export type ImageAnalysisFailed = 5;
export type ExamAnalysisFailed = 6;
export type NoSignsOfDisease = 7;
export type SignsOfModerateDiabeticRetinopathyWithNoVisionThreateningDiabeticRetinopathy = 8;
export type VisionThreateningDiabeticRetinopathyDetected = 9;

export interface NoExam {
  type: 'NoExam';
}

export type ExamComposite = { value: Exam; type: 'Exam' } | NoExam | None;

export interface None {
  type: 'None';
}

export type Empty = 0;
export type Absent = 1;
export type Present = 2;
export type Sufficient = 1;
export type Insufficient = 2;

export interface Grade {
  examId: number;
  protocolViolationReviewCode: Empty | Absent | Present;
  imageQualityReviewCode: Empty | Absent | Present;
  diabeticRetinopathyAssessmentCode: Empty | Absent | Present;
  macularEdemaAssessmentCode: Empty | Absent | Present;
  glaucomaAssessmentCode: Empty | Absent | Present;
  notes: string;
}
