export interface ITextField {
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  label: string;
  errorMessage: string;
}
