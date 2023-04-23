export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="text-md font-semibold">
      {/* &#8226;  */}
      {title}
    </span>
  );
}
