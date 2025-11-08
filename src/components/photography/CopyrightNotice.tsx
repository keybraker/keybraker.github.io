export default function CopyrightNotice({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="text-center text-12 tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light opacity-70 space-y-3">
      <p>
        All photographs on this page are original works created and owned exclusively by Ioannis Tsiakkas.
      </p>
      <p>
        They MAY BE copied, redistributed, or used in any form, apart from any commercial purpose, without explicit
        written permission.
      </p>
      <p>
        For full resolution of images please contact me at{' '}
        <a href="mailto:iantsiakkas@gmail.com" className="underline hover:opacity-80 transition-opacity">
          here
        </a>
        .
      </p>
    </div>
  );
}
