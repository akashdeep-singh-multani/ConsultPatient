import { MdHealthAndSafety, MdHistory } from 'react-icons/md';
import { TabData } from '../interfaces/TabData';

export const TABS_DATA: TabData[] = [
  {
    eventKey: 'nurse',
    icon: MdHealthAndSafety, // Assign the component itself
    label: 'Nurse',
    cardTitle: 'Nurse education service',
    cardDescription:
      'Providing best educational services with top educators...',
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
