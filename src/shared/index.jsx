import React, { useState } from 'react';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SignupRegisterForm = ({
    name,
    placeholder,
    type,
    label,
    form,
    options,
    required
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    switch (type) {
        case 'text':
        case 'number':
        case 'password':
        case 'email':
            return (
                <div className=''>
                    <FormField
                        control={form.control}
                        name={name}
                        render={({ field }) => (
                            <FormItem>
                                <div>
                                    <FormLabel>{label}</FormLabel>
                                    {required && <span className="w-4 h-4 text-red-500">*</span>}
                                </div>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={type === 'password' && showPassword ? 'text' : type}
                                            placeholder={placeholder}
                                            {...field}
                                            className='text-white '
                                        />
                                        {type === 'password' && (
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute inset-y-0 right-0 bg-slate-700 pr-3 flex items-center text-sm leading-5"
                                            >
                                                {showPassword ? 'Hide' : 'Show'}
                                            </button>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
            );

        case 'select':
            if (options) {
                return (
                    <div>
                        <FormField
                            control={form.control}
                            name={name}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{label}</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder={placeholder} />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {options?.map((opt, i) => (
                                                <SelectItem key={i} value={opt.value}>
                                                    {opt.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                );
            }
            break;

        default:
            return null;
    }
};

export default SignupRegisterForm;