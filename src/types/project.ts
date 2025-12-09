import { IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  price: number;
  features: string[];
  popular?: boolean;
  icon: IconType;
  link: string;
}
