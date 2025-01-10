import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import SignupRegisterForm from "@/shared";
import { inputs } from "@/shared/inputs";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { z } from "zod"

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
            const res = await axios.post("http://localhost:2000/api/v2/signup", information)
            console.log('response:', res);
            console.log(information);
            alert('form submitted');
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
        <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-blue-800">

            <div className="max-w-md w- space-y-8 p-10 bg-white rounded-xl shadow-lg">
                <h1 className="text-1xl font-bold lg:text-2xl">Please Fill In Your Details</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        {inputs.map((elem, i) => (
                            <SignupRegisterForm key={i + elem.name} {...elem} form={form} />
                        ))}
                        <Button type="submit" className="w-full mt-4" disabled={isloading} >
                            {isloading ? "Loading..." : "Sign Up"}
                        </Button>
                    </form>
                </Form>

                <Link to="/login" className=" text-blue-500 text-center ">
                    <p className='mt-3'>Already have an account, click to login</p>
                </Link>

                <Outlet />
            </div>

        </div>
    )
};

export default Signup