export default function ItemSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[14rem] h-[13rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[10rem] h-[1rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[5rem] h-[1rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[9rem] h-[1rem] rounded-md bg-gray-200 animate-pulse" />
    </div>
  );
}
export function ItemSkeleton2() {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[14rem] h-[13rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[10rem] h-[1rem] rounded-md bg-gray-200 animate-pulse" />
      <div className="w-[11rem] h-[1rem] rounded-md bg-gray-200 animate-pulse" />
    </div>
  );
}
