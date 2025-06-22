import Image from "next/image";

interface TestimonialProps {
  content: string;
  clientPosition: string;
  client: string;
  src: string;
}

export default function Testimonial({
  content,
  clientPosition,
  client,
  src,
}: TestimonialProps) {
  return (
    <figure className="flex flex-col">
      <blockquote cite="testimonial">
        <p>{content}</p>
      </blockquote>
      <figcaption className="flex mt-5 border-t-2 border-t-gray-500 pt-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full mr-5">
          <Image
            src={`/clients/${src}.jpg`}
            alt={`Portrait of ${client}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col font-tandem-mono-medium uppercase">
          <p className="text-sm xl:text-base">{client}</p>
          <p className="text-gray-500 text-sm xl:text-base">{clientPosition}</p>
        </div>
      </figcaption>
    </figure>
  );
}
