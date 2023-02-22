export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="ml-2 text-md font-semibold">
      {/* &#8226;  */}
      {title}
    </span>
  );
}
