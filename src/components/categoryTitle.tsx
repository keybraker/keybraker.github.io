export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="self-start font-helvetica text-xl antialiased">
      &#8226; {title}
    </span>
  );
}
