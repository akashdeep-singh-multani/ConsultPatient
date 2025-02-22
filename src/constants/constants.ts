// import { MdHealthAndSafety, MdHistory } from 'react-icons/md';
import { TabData } from '../interfaces/TabData';
import nurseIcon from '../assets/nurse_icon.png';
import historyIcon from '../assets/history_icon.png';

export const TABS_DATA: TabData[] = [
  {
    eventKey: 'nurse',
    icon: nurseIcon, // Assign the component itself
    label: 'Nurse',
    cardTitle: 'Nurse education service',
    cardDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididuntLorem ipsum dolor sit ame onsectetur adip.',
    buttonLabel: 'Read more',
  },
  {
    eventKey: 'history',
    icon: historyIcon, // Assign the component itself
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
