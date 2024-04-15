import { ChangeEvent, FormEvent } from 'react';
import { RegisterData } from '@/lib/types/auth.types';

export interface IFormResultProps {
    formData: RegisterData;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
    isError: Error | null;
}
export interface IFormContentProps extends Partial<IFormResultProps> {}

export interface IFormProps {
    requestTo: string;
    FormContent: React.JSX.Element | React.Component<IFormContentProps> | any;
}
