export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="mt-8 p-1 px-4 py-2 text-xs font-semibold">
      {/* &#8226; */}
      {title}
    </span>
  );
}
