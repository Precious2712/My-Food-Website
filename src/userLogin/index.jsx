import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import Login from '@/shadcnLogin';
import { field } from '@/shadcnLogin/field';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import toast from 'react-hot-toast';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

const LoginUser = () => {
    const [response, setResponse] = useState()
    const navigate = useNavigate()
    const [isloading, setIsLoading] = useState(false);
    // console.log(response);
    
    const form = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const res = await axios.post("https://food-webbackened.onrender.com/login", data);
            console.log('response', res);
            setResponse(res);
            const token = res.data.tokenIn

            localStorage.setItem('token', token);

            if (res) {
                navigate('/home')
                toast.success('User login successful ✅');
            }

        } catch (error) {
            console.log("error :", error);

            if (error?.response?.data?.message == 'user not found') {
                toast.error('User not found');
            }
            if (error?.message == 'Network Error') {
                toast.error('Network error, please try again');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-700 via-purple-700 to-indigo-900 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl ring-1 ring-gray-200 space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {field.map((el, i) => (
                            <Login key={i + el.name} {...el} form={form} />
                        ))}

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-md transition-all duration-300"
                            disabled={isloading}
                        >
                            {isloading ? "Loading..." : "Login"}
                        </Button>
                    </form>
                </Form>

                <div className="text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline font-medium">
                        Sign up here
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default LoginUser;