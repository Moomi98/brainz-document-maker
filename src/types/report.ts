export interface WorkReport {
  code: string;
  content: string;
  duration: string;
  etc: string;
  progress: number;
  [key: string]: string | number;
}
