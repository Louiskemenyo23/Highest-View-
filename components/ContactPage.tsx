
import React, { useState } from 'react';
import Button from './Button';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission to a backend
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Contact & Booking</h1>
                    <p className="text-lg text-gray-700">
                        We are delighted to assist you with your inquiries and reservations. Please reach out to us, and our team will be in touch shortly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-brand-cream/80 p-8 sm:p-12 rounded-lg shadow-lg">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h2 className="text-2xl font-semibold text-brand-text mb-2">Thank You!</h2>
                                <p className="text-gray-700">Your inquiry has been sent successfully. We will get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-semibold text-brand-text mb-4">Send an Inquiry</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-brass focus:border-brand-brass" value={formState.name} onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-brass focus:border-brand-brass" value={formState.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-brass focus:border-brand-brass" value={formState.subject} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-brand-brass focus:border-brand-brass" value={formState.message} onChange={handleChange}></textarea>
                                </div>
                                <div>
                                    <Button type="submit" variant="primary" className="w-full sm:w-auto">Submit Inquiry</Button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                           <svg className="w-8 h-8 text-brand-brass mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                           <div>
                               <h3 className="text-xl font-semibold text-brand-text">Address</h3>
                               <p className="text-gray-700">G60 5AF Bowling, Glasgow, United Kingdom</p>
                           </div>
                        </div>
                         <div className="flex items-start space-x-4">
                           <svg className="w-8 h-8 text-brand-brass mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                           <div>
                               <h3 className="text-xl font-semibold text-brand-text">Phone</h3>
                               <p className="text-gray-700">+44 7934 198548</p>
                           </div>
                        </div>
                        <div className="flex items-start space-x-4">
                           <svg className="w-8 h-8 text-brand-brass mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                           <div>
                               <h3 className="text-xl font-semibold text-brand-text">Email</h3>
                               <p className="text-gray-700">reservations@highestviewhotel.co.uk</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;