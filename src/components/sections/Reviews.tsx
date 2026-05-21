import ReviewCard from "@/components/ui/ReviewCard";

const reviews = [
  {
    reviewer: "Joseph Flynn",
    initials: "JF",
    rating: 5,
    content:
      "Jack and Max are both brilliant and highly productive developers with a lot of experience. They are both very friendly and supportive, professionally and personally. I would highly recommend working with them if you're looking for talented developers. Would give more stars if possible!",
    timeAgo: "1 month ago",
  },
  {
    reviewer: "Jaz Maslen",
    initials: "JM",
    rating: 5,
    content:
      "I went to some summer workshops on Claude Code that Jack and Max ran. They were some of the most productive and informative workshops I've been to — plus super hands on!",
    timeAgo: "3 weeks ago",
  },
  {
    reviewer: "Dan Sofer",
    initials: "DS",
    rating: 5,
    content:
      "I've worked with Jack and Max at Tandem. I highly recommend them.",
    timeAgo: "2 months ago",
  },
  {
    reviewer: "Lucy Paul",
    initials: "LP",
    rating: 5,
    content:
      "These guys are superb to work with. Brilliant at interpreting our brief. Brought new ideas to the design. Informative, creative and responsive. Highly recommend. Was such a pleasure working with Max.",
    timeAgo: "2 months ago",
  },
];

const OVERALL_RATING = 5.0;
const REVIEW_COUNT = reviews.length;

export default function ReviewsSection() {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="border-y border-black overflow-hidden">
      <div className="m-auto flex w-10/12 grid-cols-12 flex-col gap-6 py-16 md:py-24 lg:grid lg:w-full">
        <h2 className="col-span-2 col-start-3 font-tandem-mono-medium text-xs uppercase">
          ■ Reviews
        </h2>
        <div className="col-span-4 col-start-5 flex flex-col gap-3">
          <div className="flex items-end gap-5">
            <span className="font-tandem-condensed-medium text-7xl leading-none">
              {OVERALL_RATING.toFixed(1)}
            </span>
            <div className="flex flex-col gap-1 pb-1">
              <div
                className="flex gap-0.5"
                role="img"
                aria-label={`${OVERALL_RATING} out of 5 stars`}
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
              <span className="font-tandem-mono-regular text-xs uppercase text-gray-500">
                {REVIEW_COUNT} reviews · Google
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden pb-16 md:pb-24">
        <div
          className="flex w-max animate-marquee gap-6"
          aria-hidden="true"
        >
          {doubled.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
