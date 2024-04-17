import { IFormContentProps } from '@/lib/types/form.types';
import React from 'react';
import { Input } from '@/lib/components/shared';
import { LockIcon, UserIcon } from 'lucide-react';
import { FormSubmit } from '../FormSubmit';

export const LoginForm = ({
    formData,
    handleChange,
    isLoading,
}: IFormContentProps) => {
    return (
        <>
            <Input
                variant="primary"
                name="email"
                value={formData!.email}
                onChange={handleChange}
                placeholder="Enter your email"
                Icon={UserIcon}
                type="text"
            />
            <Input
                variant="primary"
                name="password"
                value={formData!.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter a password"
                Icon={LockIcon}
            />
            <FormSubmit
                submitBtnText="Login"
                redirectText="Don't have an account?"
                redirectLink="/register"
                isLoading={isLoading}
            />
        </>
    );
};
