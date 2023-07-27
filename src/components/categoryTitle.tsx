export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="text-md font-semibold text-tsiakkas-dark dark:text-tsiakkas-light">
      {/* &#8226;  */}
      {title}
    </span>
  );
}
