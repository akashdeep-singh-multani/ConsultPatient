import { ArticlesSuggestionData } from './ArticlesSuggestionData';
import { MedicationInfo } from './MedicationInfo';

export interface GettingStartedData {
  heading: string;
  description: string;
  medicationInfo: MedicationInfo;
  articlesSuggestionData: ArticlesSuggestionData[];
}
