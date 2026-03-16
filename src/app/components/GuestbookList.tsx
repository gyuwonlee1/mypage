import { GuestbookEntry } from "../lib/supabase";
import { MessageSquare } from "lucide-react";

interface GuestbookListProps {
  entries: GuestbookEntry[];
  isLoading: boolean;
}

export function GuestbookList({ entries, isLoading }: GuestbookListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
        <p className="text-gray-600 dark:text-gray-400">
          아직 남겨진 방명록이 없어요. 첫 번째로 메시지를 남겨주세요!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-gray-900 dark:text-white">
              {entry.name}
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(entry.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
            {entry.message}
          </p>
        </div>
      ))}
    </div>
  );
}
