export default function Loading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-3 border-olive/20 border-t-olive" />
        <p className="text-sm text-gray">Memuat data...</p>
      </div>
    </div>
  );
}
