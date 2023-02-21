export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="self-start font-helvetica text-xl">
      &#8226; {title}
    </span>
  );
}
