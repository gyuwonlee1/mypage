import { useEffect, useState } from "react";
import { GuestbookEntry, supabase } from "../lib/supabase";
import { GuestbookForm } from "./GuestbookForm";
import { GuestbookList } from "./GuestbookList";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchEntries = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("guestbook_entries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("[guestbook] 방명록 불러오기 실패:", error);
      } else if (data) {
        setEntries(data as GuestbookEntry[]);
      }
      setIsLoading(false);
    };

    fetchEntries();
  }, []);

  const handleSubmit = async (name: string, message: string) => {
    const { data, error } = await supabase
      .from("guestbook_entries")
      .insert({ name, message })
      .select()
      .single();

    if (error) {
      console.error("[guestbook] 방명록 저장 실패:", error);
      return;
    }

    if (data) {
      setEntries((prev) => [data as GuestbookEntry, ...prev]);
    }
  };

  return (
    <section ref={ref} className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">
          방명록
        </h2>
        <div className="flex flex-col gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800/50 dark:to-purple-900/20 p-6 rounded-xl shadow-lg border border-purple-100 dark:border-purple-800/30">
            <h3 className="text-xl mb-4 text-gray-900 dark:text-white font-semibold">
              한 줄 응원이나 메시지를 남겨주세요
            </h3>
            <GuestbookForm onSubmit={handleSubmit} />
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-800/50 dark:to-pink-900/20 p-6 rounded-xl shadow-lg border border-pink-100 dark:border-pink-800/30 max-h-[600px] overflow-y-auto">
            <h3 className="text-xl mb-4 text-gray-900 dark:text-white font-semibold">
              최근 방명록
            </h3>
            <GuestbookList entries={entries} isLoading={isLoading} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}