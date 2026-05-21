import ReviewCard from "@/components/ui/ReviewCard";

function timeAgo(date: string): string {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
  const years = Math.floor(days / 365);
  return `${years} year${years !== 1 ? "s" : ""} ago`;
}

const reviews = [
  {
    reviewer: "Joseph Flynn",
    initials: "JF",
    rating: 5,
    date: "2026-04-21",
    content:
      "Jack and Max are both brilliant and highly productive developers with a lot of experience. They are both very friendly and supportive, professionally and personally. I would highly recommend working with them if you're looking for talented developers. Would give more stars if possible!",
  },
  {
    reviewer: "Jaz Maslen",
    initials: "JM",
    rating: 5,
    date: "2026-04-30",
    content:
      "I went to some summer workshops on Claude Code that Jack and Max ran. They were some of the most productive and informative workshops I've been to — plus super hands on!",
  },
  {
    reviewer: "Dan Sofer",
    initials: "DS",
    rating: 5,
    date: "2026-03-21",
    content:
      "I've worked with Jack and Max at Tandem. I highly recommend them.",
  },
  {
    reviewer: "Lucy Paul",
    initials: "LP",
    rating: 5,
    date: "2026-03-21",
    content:
      "These guys are superb to work with. Brilliant at interpreting our brief. Brought new ideas to the design. Informative, creative and responsive. Highly recommend. Was such a pleasure working with Max.",
  },
];

const OVERALL_RATING = 5.0;

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="overflow-hidden border-y border-black pb-16 md:pb-24"
    >
      <div className="m-auto flex w-10/12 grid-cols-12 flex-col gap-6 py-16 md:py-24 lg:grid lg:w-full">
        <h2 className="col-span-2 col-start-3 font-tandem-mono-medium text-xs uppercase">
          <span aria-hidden="true">■ </span>Reviews
        </h2>
        <div className="col-span-4 col-start-5 flex items-end gap-5">
          <span
            className="font-tandem-condensed-medium text-7xl leading-none"
            aria-hidden="true"
          >
            {OVERALL_RATING.toFixed(1)}
          </span>
          <div className="flex flex-col gap-1 pb-1">
            <div
              className="flex gap-0.5"
              role="img"
              aria-label={`Rated ${OVERALL_RATING} out of 5 stars on Google`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="text-2xl leading-none text-black"
                >
                  ★
                </span>
              ))}
            </div>
            <a
              href="https://share.google/i6GRxFpwXWs5tM7EZ"
              target="_blank"
              rel="noopener noreferrer"
              className="font-tandem-mono-regular text-xs uppercase text-gray-500 motion-safe:transition-colors hover:text-black"
            >
              {reviews.length} reviews ·{" "}
              <span className="underline">Google</span> ↗
            </a>
          </div>
        </div>
      </div>

      <ul className="sr-only">
        {reviews.map((review) => (
          <li key={review.reviewer}>
            <p>
              {review.reviewer} — {review.rating} out of 5 stars
            </p>
            <blockquote>{review.content}</blockquote>
            <time dateTime={review.date}>{timeAgo(review.date)}</time>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <div
          className="flex gap-6 w-max motion-safe:animate-marquee"
          style={{ animationDuration: "40s" }}
          aria-hidden="true"
        >
          {[reviews, reviews, reviews, reviews].map((set, s) => (
            <div key={s} className="flex gap-6">
              {set.map((review, i) => (
                <ReviewCard
                  key={i}
                  reviewer={review.reviewer}
                  initials={review.initials}
                  rating={review.rating}
                  content={review.content}
                  timeAgo={timeAgo(review.date)}
                  date={review.date}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
