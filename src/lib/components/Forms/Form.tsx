import { useForm } from '@/lib/hooks/auth';
import { RegisterData } from '@/lib/types/auth.types';
import React from 'react';
import { IFormProps } from '@/lib/interfaces';

export const Form = ({ requestTo, FormContent }: IFormProps) => {
    const { handleSubmit, ...inputProps } = useForm<RegisterData>(requestTo);

    return (
        <form onSubmit={handleSubmit}>
            <div className="container px-3">
                <div className="wrapper d-flex mt-2 flex-col space-y-5 ">
                    <FormContent {...inputProps} />
                </div>
            </div>
        </form>
    );
};
