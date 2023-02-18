export default function CategoryTitle({ title }: { title: string }) {
  return (
    <>
      <span className="text-xl self-end font-helvetica font-semibold antialiased">
        {title}
      </span>
    </>
  );
}
