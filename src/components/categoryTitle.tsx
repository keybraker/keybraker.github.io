export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="text-md ml-2 font-semibold">
      {/* &#8226;  */}
      {title}
    </span>
  );
}
