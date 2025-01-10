import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Login = ({
    name,
    label,
    type,
    placeholder,
    required,
    form
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="">
            <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <div style={{ marginTop: "0px" }}>
                            <FormLabel>{label}</FormLabel>
                            {required && <span className="w-4 h-4 text-red-500">*</span>}
                        </div>
                        <FormControl>
                            <div className="relative">
                                <Input
                                    type={type === 'password' && showPassword ? 'text' : type}
                                    placeholder={placeholder}
                                    {...field}
                                    className='text-white'
                                />
                                {type === 'password' && (
                                    <button style={{ backgroundColor: 'blue' }}
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
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
}

export default Login;


