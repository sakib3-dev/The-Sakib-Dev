//animation
import fadeIn from "@/components/Variants";
import { motion } from "framer-motion";

//icon
import { HiArrowRight } from "react-icons/hi2";

const contact = () => {
  return (
    <section className="max-container padding-container py-12 xl:py-28">
      <div className="flex flex-col gap-6">
        {/* title */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="pb-12 text-center uppercase"
        >
          <h3 className="text-[30px] lg:text-[36px] font-extrabold relative leading-normal uppercase">
            Contact U<span className="text-secondary">s</span>
            <span className="text-[45px] lg:text-[54px] font-extrabold text-white/5 absolute top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase">
              Get in touch
            </span>
          </h3>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          action="post"
          className="flex flex-1 flex-col gap-4 w-full mx-auto max-w-[33rem]"
        >
          <div className="flex gap-2 w-full">
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none w-1/2"
            />
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none w-1/2"
            />
          </div>
          <input
            type="text"
            required
            placeholder="Enter Your Subject"
            className="regular-14 placeholder:text-gray-50 rounded-full px-4 py-1 bg-tertiary outline-none"
          />
          <textarea
            required
            name=""
            id=""
            cols="10"
            rows="8"
            placeholder="Enter Your Message"
            className="regular-14 placeholder:text-gray-50 rounded-xl px-4 py-1 bg-tertiary outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-secondary rounded-full flexCenter gap-2 w-[11rem] medium-14 hover:animate-pulse"
          >
            Send Message{" "}
            <span>
              <HiArrowRight />
            </span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default contact;
