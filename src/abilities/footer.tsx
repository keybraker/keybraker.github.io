const repo = "https://github.com/keybraker/keybraker.github.io";

export default function Footer() {
  return (
    <>
      <div className="border border-gray-300 mt-4"></div>
      <div className="flex flex-col xs:flex-row justify-between items-center xs:items-stretch">
        <span className="flex justify-center text-sm hover:underline">
          <a rel="noopener noreferrer" target="_blank" href={repo}>
            Created with love in NextJS by me
          </a>
        </span>
      </div>
    </>
  );
}
