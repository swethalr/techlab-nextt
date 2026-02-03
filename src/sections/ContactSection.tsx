'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- DATA IMPORT ---
import { contactContent } from '@/data/homepage-contact';

export default function ContactSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white p-6 md:p-12">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[20%] top-[-10%] h-[20%] w-[60%] rounded-full bg-[#3cb878]/30 blur-[100px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#3cb878]/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#3cb878_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 items-center gap-8 rounded-[40px] border border-[#3cb878]/20 bg-[#3cb878]/10 p-8 shadow-2xl md:p-12 lg:grid-cols-2">
        <div className="group relative flex justify-center lg:justify-start">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[30px] border-4 border-white shadow-xl">
            <img
              src={contactContent.image.src}
              alt={contactContent.image.alt}
              className="h-full w-full object-cover brightness-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent" />
          </div>
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-tl-[30px] border-l-4 border-t-4 border-[#3cb878]/30" />
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <h3 className="h3 font-bold leading-tight tracking-tight text-slate-900">
              {contactContent.title} <span className="text-[#3cb878]">{contactContent.titleHighlight}</span>
            </h3>
            <p className="p mt-2 font-medium text-slate-700">
              {contactContent.subtitle}
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <CleanInput label="Name" placeholder="Your Name" required/>
              <CleanInput label="Email" placeholder="Your email" required/>
              <CleanInput label="Phone" placeholder="Your Phone" required/>
              
              {/* DROPDOWN SELECT BOX */}
              <div className="group flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors group-focus-within:text-[#3cb878]">
                  Select Service <span className="text-red-500">*</span>
                </label>
                <select className="h-12 w-full rounded-xl border border-[#3cb878]/20 bg-white/80 px-4 text-slate-900 transition-all focus:border-[#3cb878] focus:outline-none focus:ring-4 focus:ring-[#3cb878]/10 appearance-none cursor-pointer">
                  {contactContent.services.map((service, idx) => (
                    <option key={idx} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <CleanInput label="GBP or Website URL" placeholder="Your GBP or Website URL"/>
              </div>
            </div>
            
            <CleanInput
              label="Subject"
              placeholder="Your Subject"
              area
            />

            {/* RECAPTCHA BOX */}
            <div className="flex items-center justify-start py-2">
               <div className="flex items-center gap-4 bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 px-1">
                    <input type="checkbox" className="w-6 h-6 cursor-pointer accent-[#3cb878]" />
                    <span className="text-sm font-medium text-slate-700">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center pl-4 border-l border-slate-100">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="w-8" />
                    <span className="text-[9px] text-slate-400 mt-1 uppercase">reCAPTCHA</span>
                  </div>
               </div>
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: '#fff8f4',
                color: '#3cb878',
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-[#3cb878] py-4 font-bold text-white shadow-lg shadow-[#3cb878]/10 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CleanInput({
  label,
  placeholder,
  area = false,
  required = false,
}: {
  label: string;
  placeholder: string;
  area?: boolean;
  required?: boolean;
}) {
  return (
    <div className="group flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors group-focus-within:text-[#3cb878]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {area ? (
        <textarea
          required={required}
          placeholder={placeholder}
          className="w-full resize-none rounded-xl border border-[#3cb878]/20 bg-white/80 p-4 text-slate-900 transition-all focus:border-[#3cb878] focus:outline-none focus:ring-4 focus:ring-[#3cb878]/10"
          rows={3}
        />
      ) : (
        <input
          type="text"
          required={required}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-[#3cb878]/20 bg-white/80 px-4 text-slate-900 transition-all focus:border-[#3cb878] focus:outline-none focus:ring-4 focus:ring-[#3cb878]/10"
        />
      )}
    </div>
  );
}