import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import SignupRegisterForm from "@/shared";
import { inputs } from "@/shared/inputs";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { z } from "zod";
import toast from 'react-hot-toast';

const formSchema = z.object({
    userName: z.string(),
    // lastname: z.string(),
    // phone: z.string().min(11),
    address: z.string(),
    email: z.string().email(),
    password: z.string().min(10),
    // gender: z.string()
});

const Signup = () => {
    const navigate = useNavigate()
    const [isloading, setisloading] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(information) {
        // console.log(information);
        setisloading(true)
        try {
            const res = await axios.post("https://food-webbackened.onrender.com/signup", information)
            console.log('response:', res);
            console.log(information);
            toast.success('User signup successful ✅');
            // console.log(information);

            if (res) {
                navigate('/login')
            }

        } catch (error) {
            console.log(error);
        }
        finally {
            setisloading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-700 via-purple-600 to-indigo-900 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-2xl shadow-2xl ring-1 ring-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Create Your Account</h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {inputs.map((elem, i) => (
                            <SignupRegisterForm key={i + elem.name} {...elem} form={form} />
                        ))}

                        <Button
                            type="submit"
                            className="w-full bg-blue-800 hover:bg-blue-500 text-white font-medium py-2 rounded-md transition-all duration-300"
                            disabled={isloading}
                        >
                            {isloading ? "Loading..." : "Sign Up"}
                        </Button>
                    </form>
                </Form>

                <div className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-medium">
                        Login
                    </Link>
                </div>

                <Outlet />
            </div>
        </div>

    )
};

export default Signup