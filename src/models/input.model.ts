export interface InputConfig {
    id: string;
    type: string 
    name: string;
    label: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    disabled?: boolean;
    className?: string;
  }