import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Globe2,
} from "lucide-react";



import SectionComponent from "../../Components/Sections";
import {useForm} from "react-hook-form"
import { type ContactUsType } from "../../../GlobalTypes";


function ContactUsPage() {





const {register, handleSubmit,  


} = useForm<ContactUsType>()


const SendInquiry = (data:ContactUsType) =>{
console.log(data)
}




  return (
    <SectionComponent
      id="contact"
      className="bg-slate-950"
    >
      {/* Background Details */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-slate-800/60 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Let's discuss what's
            <span className="block text-amber-400">
              next for your organization.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Whether you are looking to strengthen your strategy, develop
            your team, improve your systems, or pursue new opportunities,
            our team is ready to have a conversation.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
              Start a conversation
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              We would be pleased to hear from you.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Tell us a little about your organization, your current
              challenge, or the opportunity you are exploring. We will
              get back to you to discuss how we can help.
            </p>

            {/* Contact Details */}
            <div className="mt-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    info@dorisaconsult.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    +233 XX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Accra, Ghana
                  </p>
                </div>
              </div>
<div className="flex items-start gap-4">
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
    <Globe2 size={19} />
  </div>

  <div>
    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
      Website
    </p>

    <a
      href="https://www.dorisaconsult.com"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-1 block text-sm font-medium text-white transition hover:text-amber-400"
    >
      www.dorisaconsult.com
    </a>
  </div>
</div>

              
            </div>

            {/* Trust Statement */}
            <div className="mt-10 border-t border-white/10 pt-7">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <p className="text-sm leading-6 text-slate-400">
                  Every conversation begins with understanding your
                  objectives, challenges, and priorities.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2rem] bg-white p-7 shadow-2xl shadow-black/20 md:p-9"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-600">
                Get in touch
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                Tell us how we can help.
              </h3>
            </div>

            <form className="space-y-5
            " onSubmit={handleSubmit(SendInquiry)}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <input
                {...register("FullName",{
                  required:"Kindly provide your name"
                })}
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Business Email
                </label>

                <input
                {...register("BusinessEmail",{
                  required:"Kindly provide your business mail"
                })}
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Organization
                </label>

                <input
                 {...register("Organisation",{
                  required:"Kindly provide your organization"
                })}

                  id="organization"
                  type="text"
                  placeholder="Organization name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Area of Interest
                </label>

                <select
                 {...register("Area_of_interest",{
                  required:"Kindly Select one of these"
                })}

                  id="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="strategy">
                    Strategic Planning
                  </option>
                  <option value="leadership">
                    Team & Leadership Development
                  </option>
                  <option value="systems">
                    Systems & Operations
                  </option>
                  <option value="growth">
                    Business Growth & Advisory
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  How Can We Help?
                </label>

                <textarea
                 {...register("HelpNotes",{
                  required:"Kindly Select one of these"
                })}

                  id="message"
                  rows={5}
                  placeholder="Tell us briefly about your objectives or challenge..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                />
              </div>

              {/* Submit */}
               <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >

                <ArrowUpRight
                  size={17}
                  className="text-amber-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
                Submit Details
              </motion.button> 
            



              <p className="text-center text-xs leading-5 text-slate-400">
                Your information will be treated with confidentiality
                and used only to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-slate-500">
              DORiSA Consult — Strategy, People, Systems & Growth.
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
              Building organizations that last
            </p>
          </div>
        </motion.div>
      </div>
    </SectionComponent>
  );
}

export default ContactUsPage;