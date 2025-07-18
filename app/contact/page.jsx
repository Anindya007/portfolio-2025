"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from "react-icons/fa";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import toast, {Toaster} from "react-hot-toast";

// Form validation schema
const contactSchema = z.object({
    firstName: z.string()
        .min(1, "First name is required")
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be less than 50 characters"),
    lastName: z.string()
        .min(1, "Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be less than 50 characters"),
    email: z.string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    phone: z.string().optional(),
    message: z.string()
        .min(1, "Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message must be less than 1000 characters"),
});

const info = [
    {   
        icon: <FaPhoneAlt size={20} />,
        title: "Phone",
        description: "+91-9432303489"
    },{
        icon: <FaEnvelope size={20} />,
        title: "Email",
        description: "anindyachakladar9@gmail.com"
    },{
        icon: <FaMapMarkerAlt size={20} />,
        title: "Address",
        description: "Madanmohan Apartment,West Jagtala,Kolkata - 700141, India"
    }
];

const Contact = () => {
    const firstNameRef = useRef(null);
    const searchParams = useSearchParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
        setFocus,
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: 'onChange', // This will validate on change
    });

    // Debug: Watch form values
    const watchedValues = watch();
    console.log('Current form values:', watchedValues);
    console.log('Current form errors:', errors);
    
    useEffect(() => {
        // Check if the focus parameter is present in the URL
        if (searchParams.get('focus') === 'firstname') {
            // Small delay to ensure the component is fully rendered
            setTimeout(() => {
                setFocus('firstName');
            }, 100);
        }
    }, [searchParams, setFocus]);

    const onSubmit = async (data) => {
        console.log('Form data being submitted:', data);
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Response status:', response.status);
            
            if (response.ok) {
                const result = await response.json();
                console.log('Success response:', result);
                toast.success('Message sent successfully! I\'ll get back to you soon.');
                reset(); // Clear the form
            } else {
                const errorData = await response.json();
                console.log('Error response:', errorData);
                toast.error(errorData.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[50%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-accent text-4xl">Let's work together</h3>
                            <p className="font-light text-base">Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Input 
                                        {...register("firstName", {
                                            setValueAs: (value) => value?.trim() || ""
                                        })}
                                        type="text" 
                                        placeholder="First Name" 
                                        className={`${errors.firstName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Input 
                                        {...register("lastName", {
                                            setValueAs: (value) => value?.trim() || ""
                                        })}
                                        type="text" 
                                        placeholder="Last Name" 
                                        className={`${errors.lastName ? 'border-red-500' : ''}`}
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Input 
                                        {...register("email", {
                                            setValueAs: (value) => value?.trim() || ""
                                        })}
                                        type="email" 
                                        placeholder="Your Email" 
                                        className={`${errors.email ? 'border-red-500' : ''}`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Input 
                                        {...register("phone", {
                                            setValueAs: (value) => value?.trim() || ""
                                        })}
                                        type="tel" 
                                        placeholder="Phone (Optional)" 
                                    />
                                </div>

                                <div className="col-span-full space-y-2">
                                    <div className="h-[200px]">
                                        <Textarea 
                                            {...register("message", {
                                                setValueAs: (value) => value?.trim() || ""
                                            })}
                                            rows={6} 
                                            placeholder="Tell me about your project, timeline, and how I can help you..."
                                            className={`h-full resize-none ${errors.message ? 'border-red-500' : ''}`}
                                        />
                                    </div>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button 
                                    type="submit"
                                    size="lg" 
                                    disabled={isSubmitting}
                                    className="max-w-40 bg-accent p-1 text-black hover:bg-black hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </div>
                            
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0 rounded-xl">
                        <ul>
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 mb-6">
                                    <div className="text-accent relative -mt-[19px] w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272F] rounded-md flex items-center justify-center ">{item.icon}</div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Toaster 
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#27272c',
                        color: '#fff',
                        border: '1px solid #00ff99',
                    },
                    success: {
                        iconTheme: {
                            primary: '#00ff99',
                            secondary: '#27272c',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#27272c',
                        },
                    },
                }}
            />
        </motion.section>
    );
};

export default Contact;