import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import Login from '@/shadcnLogin';
import { field } from '@/shadcnLogin/field';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';


const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
});

const LoginUser = () => {
    const [response, setResponse] = useState()
    const navigate = useNavigate()
    const { toast } = useToast();
    const [isloading, setIsLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const res = await axios.post("http://localhost:2000/api/v2/login", data);
            console.log('response', res);
            setResponse(res);
            const token = res.data.tokenIn

            localStorage.setItem('token', token);

            if (res) {
                navigate('/home')
                alert('user login successfully')
            }

        } catch (error) {
            console.log("error :", error);

            if (error?.response?.data?.message == 'user not found') {
                return alert('user not found')
            }
            if (error?.message == 'Network Error') {
                return alert('Network Error')
            }
        } finally {
            setIsLoading(false);
        }
    };




    return (
        <div className="flex items-center justify-center h-screen bg-blue-800">
            <div className="p-8 bg-white shadow-lg rounded-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {field.map((el, i) => {
                            return (
                                <Login key={i + el.name} {...el} form={form} />
                            );
                        })}
                        <Button type="submit" className="w-full" disabled={isloading} >
                            {isloading ? "Loading..." : "Login"}
                        </Button>
                    </form>
                </Form>
                <Link to="/signup" className="block mt-4 text-center text-blue-500">
                    Don't have an account? Sign up here
                </Link>
            </div>


        </div>
    );
};

export default LoginUser;