import { FileQuestion } from "lucide-react";

interface EmptyStateProps {
  message?: string;
  description?: string;
}

export default function EmptyState({
  message = "Belum ada data",
  description = "Informasi akan ditampilkan ketika data sudah tersedia.",
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[30vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <FileQuestion className="h-12 w-12 text-gray/50" />
        <h3 className="text-lg font-semibold text-dark">{message}</h3>
        <p className="max-w-sm text-sm text-gray">{description}</p>
      </div>
    </div>
  );
}
