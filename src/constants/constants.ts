import { MdHealthAndSafety, MdHistory } from 'react-icons/md';
import { TabData } from '../interfaces/TabData';

export const TABS_DATA: TabData[] = [
  {
    eventKey: 'nurse',
    icon: MdHealthAndSafety, // Assign the component itself
    label: 'Nurse',
    cardTitle: 'Nurse education service',
    cardDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip.',
    buttonLabel: 'Read more',
  },
  {
    eventKey: 'history',
    icon: MdHistory, // Assign the component itself
    label: 'History',
    cardTitle: 'Welcome Claire',
    cardDescription: 'Request a consult with one of our qualified nurses.',
    buttonLabel: 'Request now',
  },
];

export const FAQ_LIST = [
  {
    question: 'What is Nurse Education?',
    answer: 'Detailed description about Nurse Education.',
  },
  {
    question: 'How can I register?',
    answer: 'You can register by visiting our registration page.',
  },
  {
    question: 'What services do we offer?',
    answer: 'We offer a variety of healthcare educational services.',
  },
];

export const user = {
  name: 'John Doe',
  firstName: 'John',
};

export const HEADING_NURSE = 'Nurse Educator Portal';
export const HEADING_DESC_NURSE = 'Find a trusted tool for the program';

export const CARD_HEADING_NURSE = 'Nurse education service';
export const CARD_SUB_HEADING_NURSE =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip.';

export const QUESTIONS_CARD_TITLE = 'Questions?';
export const BOOKING_INFO_TITLE = 'Your nurse call booking:';
export const BOOKING_DESC = 'No current booking';
export const REMINDER_TITLE = 'Your reminders';
export const REMINDER_DESC = 'No current booking';
export const VIDEO_POSTER_URL =
  'https://s3-alpha-sig.figma.com/img/1047/b294/b5afaaa8ff39192994465653bf2f509f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XZXm4ounjV38xCGGZkQ5EOQV36YY23-B6Pt0iqPjuTFuxpfIK1t-zJvsZ3JdMOc~hrQo-EPBNXLLehfVJbk~Dh2AH8P1O9XlrADp7NHlZ4PuRSmGVxYv4NvVyf0ey5q3gaH9X8o4WQx~wSqnzkAE4qyACv4CUgzb30oIHtdFEERJnNdCuRD3cdpVY2WwA7mW4UI-yXTvZGfv7bAlZ5xu75xwTAJVN8W-L8-a5BeXaygZoBJGqB6raWuWgly9HxxwPSrYeUOrzGbR7NqHAohrFsIi4wzO4LRLgtG3M7VCpQjagEhQF7Jgx5uFEF2qyiIxyczMVXUDnKnMEcIHgGM4Ow__';
