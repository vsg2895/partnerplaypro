/**
 * All user-facing and SEO-facing wording for this site.
 *
 * The KEY STRUCTURE is identical across every site in the network — same
 * groups, same keys, same order — so the apps stay interchangeable and a
 * component written for one works on all of them.
 *
 * The WORDS are deliberately unique to this site. That is not decoration: the
 * three brands are separate domains serving the same catalogue, and if they
 * shipped the same titles, descriptions and headings, Google would treat them as
 * duplicate content and suppress all but one. Every string that reaches a
 * <title>, a meta description, an <h1>/<h2> or a JSON-LD field must therefore
 * read differently here than on the sibling sites.
 *
 * partnerplaypro's angle: the scorer. Every casino is judged on three things a
 * player actually feels — how fair the bonus terms are, how fast a withdrawal
 * lands, and whether support answers at peak hours. Taken from the brief in
 * sites/partnerplaypro.html.
 */
export const COPY = {
  // SEO identity. These three reach the <title>, the meta description and the
  // keywords tag on EVERY page that does not set its own — which is most of
  // them — so they are the strings most likely to be read as duplicate content
  // if a sibling domain ships the same words. Kept here, beside the rest of this
  // site's wording, rather than inline in layout.tsx where they drifted into
  // being byte-identical with idevaffiliation.
  site: {
    titleTail: 'Casinos Ranked On Fair Play',
    description:
      'scores every casino on bonus fairness, payout reliability and support quality — hand-checked, and re-checked every month.',
    keywords: [
      'fair casino bonus terms',
      'fastest payout casinos',
      'casino wagering requirements compared',
      'casino support response times',
      'hand-checked casino rankings',
    ],
  },
  nav: {
    casinos: 'Casinos',
    specialOffers: 'Special Offers',
    categories: 'Categories',
  },
  home: {
    heroEyebrow: 'Re-checked this month',
    // Split in two so the JSX keeps its emphasised <em> while the words change.
    heroHeadline: 'Play with casinos that',
    heroHighlight: 'play fair back',
    heroSubtitle:
      'PartnerPlayPro scores every casino on three things players actually feel: how fair the bonus is, how fast the money comes out, and how quickly support picks up.',
    topCasinosTitle: 'Top-Rated Casinos',
    topCasinosSubtitle: 'Ranked by our fair-play score. Narrow them down by category.',
    featuredCasinos: 'See the top casinos',
    specialOffers: 'Best offers',
    viewAll: 'View all',
    // Leads the home <title>; the year and brand are appended in page.tsx.
    homeTitle: 'Casinos Ranked On Fair Play',
    faqTitle: 'How The Scoring Works',
    metaDescription:
      'Casinos scored on bonus fairness, payout reliability and support quality — every ranking hand-checked and dated.',
  },
  casinos: {
    pageTitle: 'Casinos Scored On Fair Play',
    pageDescription:
      'Every casino on this list is scored on three things: how fair the bonus terms are, how fast a withdrawal clears, and whether support answers.',
    // Meta-description fallback for a casino review page. Casino records are
    // GLOBAL master data shared by every site, so without a per-site line here
    // all four domains would ship the identical description for the same casino.
    // Short per-site tail appended to an ADMIN-ENTERED casino meta description.
    // Casino records are shared by every site, so without this the same
    // description would ship on all four domains the moment the field is filled.
    // Appended to og:title / twitter:title on a casino review. The casino's
    // own meta_title is shared master data, so without this every domain
    // shipped an IDENTICAL share-card title for the same casino.
    // H2 over the offers block on a casino page. The literal 'Special Offers'
    // was hardcoded in the component on all six sites — an identical H2 on
    // every review page in the network.
    offersHeading: 'Offers From This Casino',
    // Tail of the summary-panel H2: `{casino.name} table facts`.
    glanceHeadingTail: 'at a glance',
    reviewTitleTail: 'Fair-Play Score',
    reviewSignature: 'Scored on bonus fairness, payout speed and support.',
    reviewSummary: 'scored on bonus fairness, payout reliability and how quickly support answers.',
    visitCasino: 'Play Now',
    readReview: 'Full Review',
    rating: 'Fair-play score',
    noResults: 'Nothing matches those filters yet. Try another category.',
  },
  specialOffers: {
    pageTitle: "Today's Offers",
    pageDescription:
      'Bonuses that passed our fairness check — wagering, caps and max-bet rules read in full before the offer goes on this page.',
    // Appended to an offer's (shared) bonus text so the four sites do not ship
    // an identical meta description for the same offer.
    offerMetaSuffix: 'Wagering, caps and max-bet rules read in full before it went on this page.',
    claim: 'Claim Offer',
    noResults: 'No offers are running right now.',
  },
  categories: {
    pageTitle: 'Game Categories',
    pageDescription:
      'Same fair-play score behind every list — browse the casinos by category.',
    // Meta-description tail for a single category page. Category records are
    // shared master data, so this is what keeps the four sites distinct there.
    categoryMetaSuffix: 'ranked by our fair-play score: bonus terms, payout speed and support quality.',
    noResults: 'Nothing to show here yet.',
  },
  newsletter: {
    title: 'New Fair Offers, Once A Week.',
    subtitle: "Only bonuses that pass our fairness check — plus any casino we've dropped from the list, and why.",
    placeholder: 'Email address',
    button: 'Subscribe',
    // Shown while the address is being checked. The subscribe request now
    // waits on a live address-validation call, so the button has to say so
    // rather than just dimming for a second or two.
    checking: 'Checking…',
        // The spam line is NOT optional wording. This is a double opt-in list: an
    // unconfirmed subscriber never receives anything again, and the verify mail
    // is the single most likely message to be filtered — new sender, one link,
    // no history. Telling people where to look is the difference between a
    // signup and a dead row.
    success:
      'Nearly there — check your inbox and confirm your address to finish. '
      + 'If nothing arrives, it may be sitting in spam or junk.',
    // Shown when the API reports email_sent=false — the site is still
    // collecting addresses but its sending is switched off in the admin.
    // Promising an inbox (and a spam folder to search) for mail that will
    // never arrive is worse than not collecting the address at all.
    successNoEmail:
      "You're on the list. We are not sending confirmation emails from this site at the moment.",
    error: 'That did not send. Please try again.',
  },
  footer: {
    // Short brand blurb in the footer, above the legal links.
    //
    // KEEP THIS UNDER ~72 CHARACTERS. The footer's brand column is
    // (1152 - 32 padding - 40 gap) / 2 = 540px at the sm: breakpoint where the
    // grid becomes two columns, and the text renders at 14px — about 77
    // characters to a line. Anything longer wraps to a second line, which is
    // what this wording was trimmed to fix. It still wraps on a phone, where a
    // single column is ~340px; that is unavoidable for any real sentence and is
    // the correct behaviour there.
    tagline:
      'Independent casino rankings built on bonus fairness, payout reliability and support quality. Play responsibly — 18+.',
    // Registered postal address, shown beside the copyright line. A physical
    // address in the footer is what mailbox providers and the gambling
    // affiliate compliance checks both look for, and it must match the address
    // used in the email templates.
    postalAddress: '30 St Mary Axe, London, EC3A 8BF, United Kingdom',
    disclaimer:
      'Gambling is for adults aged 18 or over and carries real financial risk. Set deposit limits, never chase losses, and only stake what you can afford to lose.',
  },
  errors: {
    notFound: 'This page is not on the board.',
    apiError: 'Could not load this content. Please try again in a moment.',
  },
  reviews: {
    heading: 'Player Reviews',
    empty: 'No reviews yet \u2014 be the first to share your experience.',
    formTitle: 'Write A Review',
    formIntro: 'Your review appears on this page as soon as you post it.',
    nameLabel: 'Your name',
    emailLabel: 'Email (optional, never published)',
    ratingLabel: 'Rating',
    titleLabel: 'Headline (optional)',
    bodyLabel: 'Your review',
    bodyPlaceholder: 'What was your experience \u2014 payouts, support, verification?',
    submit: 'Submit Review',
    // Two outcomes, because the site can run pre- or post-moderation
    // (Sites -> Publish reviews immediately). The API reports which one
    // applied; promising the wrong one is a promise the page then breaks.
    success: 'Thanks \u2014 your review is now live. Scroll up to see it.',
    successPending: 'Thanks \u2014 your review has been submitted and will appear once approved.',
    error: 'That did not send. Please check the form and try again.',
    ratingSummary: (avg: number, total: number) =>
      `${avg.toFixed(1)} out of 5 from ${total} ${total === 1 ? 'review' : 'reviews'}`,
  },
} as const
