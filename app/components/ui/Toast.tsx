"use client";

import { CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useToast } from "@/app/context/ToastContext";

export default function Toast() {
  const { toast } = useToast();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-24 z-[9999] w-[360px] rounded-2xl border border-[#C9A14A]/30 bg-[#111] p-5 shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-[#C9A14A]/20 p-2">
              <CheckCircle
                size={22}
                className="text-[#C9A14A]"
              />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                {toast.title}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {toast.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}