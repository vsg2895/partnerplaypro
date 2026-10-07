import Link from 'next/link'

/**
 * PartnerPlayPro brand logo: a raspberry rounded square carrying a stylised "P"
 * with a tangerine play triangle, beside the wordmark and the "FAIR-PLAY
 * RANKINGS" tagline. Taken from sites/partnerplaypro.html.
 *
 * Inlined SVG rather than an image: it renders instantly with no extra request,
 * stays crisp at any size, and takes its colours from the theme tokens, so a
 * palette change here is a palette change everywhere. The Link carries the
 * accessible name; the artwork is aria-hidden to avoid a duplicate
 * announcement.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="PartnerPlayPro home"
      className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${className}`.trim()}
    >
      <svg
        viewBox="0 0 34 34"
        className="h-9 w-9 shrink-0 sm:h-[38px] sm:w-[38px]"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="34" height="34" rx="10" fill="var(--color-brand)" />
        {/* The P's bowl, drawn as a stroke so it keeps its weight at any size. */}
        <path
          d="M11 26V8h7.4a6.2 6.2 0 0 1 0 12.4H11"
          fill="none"
          stroke="var(--color-brand-ink)"
          strokeWidth="3.4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* "Play" — the one tangerine mark in the logo. */}
        <path d="M16.6 11.4v5.6l4.6-2.8z" fill="var(--color-accent)" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-extrabold tracking-tight text-ink sm:text-[21px]">
          Partner<span className="text-brand">Play</span>Pro
        </span>
        <span className="mt-[5px] text-[9px] font-semibold uppercase tracking-[0.24em] text-faint">
          Fair-play rankings
        </span>
      </span>
    </Link>
  )
}
