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
    <>
      <div className="flex flex-col ">
        <p className="">{content}</p>
        <div className="flex mt-5 border-t-2 border-t-gray-500 pt-4">
          <div className="overflow-hidden h-10 w-10 rounded-full mr-5">
            <Image
              src={`/client-pics/client-${src}.jpeg`}
              alt={`Portrait of ${client}`}
              width={40}
              height={40}
            ></Image>
          </div>
          <div className="flex flex-col font-tandem-mono-medium uppercase">
            <p className="text-sm xl:text-base">{client}</p>
            <p className="text-gray-500 text-sm xl:text-base">
              {clientPosition}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
