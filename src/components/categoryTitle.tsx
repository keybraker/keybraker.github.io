export default function CategoryTitle({ title }: { title: string }) {
  return (
    <span className="text-xl self-start font-helvetica antialiased">
      &#8226; {title}
    </span>
  );
}
