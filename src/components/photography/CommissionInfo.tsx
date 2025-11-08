import MyWords from '@/components/myWords';

export default function CommissionInfo({ isMobile }: { isMobile: boolean }) {
  return (
    <section aria-labelledby="contact-heading" className="w-full text-start">
      <div className="flex flex-col gap-6">
        {MyWords({ text: 'Commissioned Work' })}
        <div className="flex flex-col gap-0 text-base md:text-lg leading-relaxed text-tsiakkas-dark/70 dark:text-tsiakkas-light/70 font-light">
          <p>
            Available for event photography, product shoots, and commercial projects, get in touch to discuss your
            photography needs.
          </p>
          <p>
            For inquiries and bookings, please contact me{' '}
            <a href="mailto:iantsiakkas@gmail.com" className="underline hover:opacity-80 transition-opacity">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
