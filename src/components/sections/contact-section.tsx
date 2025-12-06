import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

// Form validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid email address'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters'),
  serviceInterest: z.enum(['MICE', 'Corporate Booking', 'Logistics', 'Other'], {
    message: 'Please select a service interest'
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ContactSectionProps {
  isDarkMode?: boolean;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode = true, className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      companyName: '',
      phoneNumber: '',
      serviceInterest: 'MICE',
      message: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to your backend
    // await sendContactForm(data);
    // reset(); // Reset form after successful submission
  };

  return (
    <section
      id="contact-section"
      className={cn(
        "relative z-10 py-20 px-4 sm:px-6 lg:px-8",
        isDarkMode ? "bg-slate-950/50" : "bg-gray-50/50",
        "backdrop-blur-sm",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          "backdrop-blur-xl border rounded-3xl p-8 lg:p-12 shadow-2xl",
          isDarkMode
            ? "bg-slate-900/50 border-white/10"
            : "bg-white/90 border-gray-200"
        )}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - The Form */}
            <div className="space-y-6">
              <h2 className={cn(
                "font-brand text-3xl font-bold mb-6",
                isDarkMode ? "text-white" : "text-gray-900"
              )}>
                Get In Touch
              </h2>
              <p className={cn(
                "font-body text-lg mb-8",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}>
                Ready to transform your travel experience? Let's discuss how we can help your business.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className={cn(
                    "block font-body text-sm font-medium mb-2",
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  )}>
                    Full Name
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                      isDarkMode 
                        ? "bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-slate-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-amber-500"
                    )}
                    placeholder="John Smith"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Work Email */}
                <div>
                  <label className={cn(
                    "block font-body text-sm font-medium mb-2",
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  )}>
                    Work Email
                  </label>
                  <input
                    {...register('workEmail')}
                    type="email"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                      isDarkMode 
                        ? "bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-slate-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-amber-500"
                    )}
                    placeholder="john@company.com"
                  />
                  {errors.workEmail && (
                    <p className="text-red-400 text-sm mt-1">{errors.workEmail.message}</p>
                  )}
                </div>

                {/* Company Name & Phone Number - Side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={cn(
                      "block font-body text-sm font-medium mb-2",
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    )}>
                      Company Name
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                        isDarkMode 
                          ? "bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-slate-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-amber-500"
                      )}
                      placeholder="Global Tech Solutions"
                    />
                    {errors.companyName && (
                      <p className="text-red-400 text-sm mt-1">{errors.companyName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className={cn(
                      "block font-body text-sm font-medium mb-2",
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    )}>
                      Phone Number
                    </label>
                    <input
                      {...register('phoneNumber')}
                      type="tel"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg border transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                        isDarkMode 
                          ? "bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-slate-500"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-amber-500"
                      )}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-400 text-sm mt-1">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label className={cn(
                    "block font-body text-sm font-medium mb-2",
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  )}>
                    Service Interest
                  </label>
                  <select
                    {...register('serviceInterest')}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                      isDarkMode 
                        ? "bg-slate-800/50 border-slate-600 text-white focus:border-slate-500"
                        : "bg-white border-gray-300 text-gray-900 focus:border-amber-500"
                    )}
                  >
                    <option value="MICE">MICE</option>
                    <option value="Corporate Booking">Corporate Booking</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.serviceInterest && (
                    <p className="text-red-400 text-sm mt-1">{errors.serviceInterest.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className={cn(
                    "block font-body text-sm font-medium mb-2",
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  )}>
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border transition-all duration-200 resize-none",
                      "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                      isDarkMode 
                        ? "bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-slate-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-amber-500"
                    )}
                    placeholder="Tell us about your travel needs..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1",
                    "focus:outline-none focus:ring-2 focus:ring-amber-500/50",
                    isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg",
                    "bg-gradient-to-r from-amber-500 to-amber-600 text-white",
                    "hover:from-amber-600 hover:to-amber-700"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8 8 8 0 01-8 8zm0 0v2m0-6v6"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={cn(
                  "font-body text-xl font-bold mb-6",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}>
                  Direct Contact Options
                </h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className={cn(
                    "flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200",
                    isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-gray-300 shadow-sm hover:shadow-md"
                  )}>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <div className={cn(
                        "font-semibold",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>
                        Phone Support
                      </div>
                      <div className={cn(
                        "text-sm",
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      )}>
                        +1 (800) 123-4567
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className={cn(
                    "flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200",
                    isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-gray-300 shadow-sm hover:shadow-md"
                  )}>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <div className={cn(
                        "font-semibold",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>
                        Email Support
                      </div>
                      <div className={cn(
                        "text-sm",
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      )}>
                        enterprise@confroom.hospitality
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className={cn(
                    "flex items-center space-x-4 p-4 rounded-lg border transition-all duration-200",
                    isDarkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-gray-300 shadow-sm hover:shadow-md"
                  )}>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <div className={cn(
                        "font-semibold mb-2",
                        isDarkMode ? "text-white" : "text-gray-900"
                      )}>
                        Find Us
                      </div>
                      <div className={cn(
                        "text-sm mb-3",
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      )}>
                        Visit our corporate offices in New York & London
                      </div>
                      
                      {/* Map Preview */}
                      <div className={cn(
                        "w-full h-48 rounded-lg overflow-hidden border transition-all duration-200 hover:shadow-md",
                        isDarkMode ? "border-slate-600" : "border-gray-300"
                      )}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.115330488179!2d77.5204317!3d28.476073199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea868db926b1%3A0xbef80d8de9648ce5!2sOmaxe%20India%20Trade%20Center!5e0!3m2!1sen!2sin!4v1765020870561!5m2!1sen!2sin"
                          width="100%"
                          height="250"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className={cn(
                "mt-8 p-6 rounded-lg border transition-all duration-200",
                isDarkMode ? "bg-slate-800/30 border-slate-700" : "bg-gray-50 border-gray-300 shadow-sm"
              )}>
                <h4 className={cn(
                  "font-semibold mb-3",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}>
                  Response Time
                </h4>
                <p className={cn(
                  "text-sm leading-relaxed",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}>
                  Our team typically responds within 2 hours during business hours. For urgent matters, please call our 24/7 support line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;