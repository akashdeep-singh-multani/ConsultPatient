import { QuestionCardData } from './QuestionCardData';
import { Service } from './Service';

export interface DashData {
  heading: string;
  description: string;
  services: Service[];
  questionCardData: QuestionCardData;
}
