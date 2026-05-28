import Link from "next/link";

interface GoogleReviewBadgeProps {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function GoogleReviewBadge({
  className = "",
  onClick,
}: GoogleReviewBadgeProps) {
  return (
    <Link
      href="#reviews"
      onClick={onClick}
      className={`flex flex-col gap-1 border border-white/40 px-4 py-3 text-white motion-safe:transition-colors hover:border-white/70 hover:text-white/70 ${className}`}
    >
      <span className="text-sm tracking-widest" aria-hidden="true">
        ★★★★★
      </span>
      <span className="font-tandem-mono-regular text-xs uppercase tracking-widest">
        5.0 · Google
      </span>
    </Link>
  );
}
