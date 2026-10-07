/**
 * Frequently asked questions for this site.
 *
 * Rendered VISIBLY on the home page and emitted as FAQPage structured data from
 * this same array. Google requires the two to match; markup-only FAQ is a
 * guidelines violation, which is why the page maps over this constant rather
 * than duplicating the text.
 *
 * The wording is unique to this site: these answers are indexable page content,
 * and they are exactly the kind of text an answer engine quotes. Here they
 * explain the scoring, because that is what this brand is — three named
 * criteria and nothing else.
 *
 * Nothing below claims a number this site cannot show. "We publish observed
 * times rather than advertised ones" is a statement about method; a specific
 * figure would be a measurement nobody could check.
 */
export const FAQ_ITEMS = [
  {
    question: "How is a casino scored?",
    answer:
      "On three things a player actually feels: how fair the bonus terms are, how reliably withdrawals arrive, and whether support answers at peak hours. Nothing about a casino's marketing, its game count or its affiliate terms enters the score.",
  },
  {
    question: "What makes a bonus 'fair'?",
    answer:
      "Terms you can read in full before you deposit. We check the wagering multiplier and what it applies to, the maximum conversion cap, the maximum bet while wagering, the expiry, and which games actually contribute. An offer with a hidden term does not go on this list.",
  },
  {
    question: "How do you test payout reliability?",
    answer:
      "By making real withdrawals and timing them from request to wallet, including any verification step. We publish observed times rather than advertised ones, because the advertised figure almost never includes the checks.",
  },
  {
    question: "How is support tested?",
    answer:
      "Live chat, in English, at peak hours rather than quiet ones — a queue at 03:00 tells you nothing about a Saturday night. We note whether the first reply came from a person and whether it answered the question asked.",
  },
  {
    question: "Does a casino pay to rank higher?",
    answer:
      "No. We earn a commission when somebody signs up through a link here, and that arrangement has no bearing on the score or the order. A casino that fails the checks is removed from the list regardless of what it pays.",
  },
  {
    question: "How often is the list re-checked?",
    answer:
      "Every month. Terms change, payout times drift and support teams get rebuilt, so a ranking that is a year old is a guess. Each casino carries the date it was last checked.",
  },
] as const
