interface ReviewCardProps {
  content: string;
  reviewer: string;
  rating: number;
  timeAgo?: string;
  date?: string;
  initials: string;
}

export default function ReviewCard({
  content,
  reviewer,
  rating,
  timeAgo,
  date,
  initials,
}: ReviewCardProps) {
  return (
    <figure className="flex w-80 shrink-0 flex-col border border-black bg-white">
      <div className="flex items-center justify-between border-b border-black px-5 py-4">
        <div
          className="flex gap-0.5"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`text-lg leading-none ${i < rating ? "text-black" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>
        <span className="font-tandem-mono-regular text-xs uppercase tracking-widest text-gray-500">
          Google
        </span>
      </div>
      <blockquote className="flex-1 px-5 py-6">
        <p className="font-tandem-regular text-sm leading-relaxed line-clamp-5">
          &ldquo;{content}&rdquo;
        </p>
      </blockquote>
      <figcaption className="flex items-center gap-4 border-t border-black px-5 py-4">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white"
        >
          <span className="font-tandem-mono-medium text-xs uppercase">
            {initials}
          </span>
        </div>
        <div className="flex min-w-0 flex-col font-tandem-mono-medium uppercase">
          <p className="truncate text-sm">{reviewer}</p>
          {timeAgo && (
            <time
              dateTime={date}
              className="text-xs text-gray-500"
            >
              {timeAgo}
            </time>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
