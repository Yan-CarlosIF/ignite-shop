export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[656px] w-full max-w-[1180px] gap-16">
      <div
        className="w-full animate-pulse rounded-lg p-8"
        style={{
          background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        }}
      />
      <div className="flex w-full flex-col">
        <div className="w-1/2 animate-pulse rounded-lg bg-gray-500 py-5"></div>
        <div className="mt-4 w-[100px] animate-pulse rounded-lg bg-green-500 py-5"></div>
        <div className="mt-10 w-9/12 animate-pulse rounded-lg bg-gray-500 py-16"></div>
        <div className="mt-auto animate-pulse rounded-lg bg-green-500 py-8"></div>
      </div>
    </div>
  );
}
