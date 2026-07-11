import { motion } from "framer-motion";
import type { TimelineEvent } from "../../types";

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-olive/20 md:left-1/2 md:-translate-x-px" />

      <div className="space-y-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative flex items-start gap-6 md:gap-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-olive bg-white md:left-1/2" />

            {/* Content */}
            <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <span className="mb-1 inline-block text-sm font-semibold text-olive">
                  {event.year}
                </span>
                <h3 className="mb-2 text-lg font-bold text-dark">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {event.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
