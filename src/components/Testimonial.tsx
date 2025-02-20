interface TestimonialProps {
  content: string;
  clientPosition: string;
  client: string;
}

export default function Testimonial({
  content,
  clientPosition,
  client,
}: TestimonialProps) {
  return (
    <>
      <div className="flex flex-col mb-16">
        <p className="">{content}</p>
        <div className="flex mt-5 border-t-2 border-t-gray-500 pt-4">
          <div className="h-10 w-10 rounded-full bg-green-200 mr-5"></div>
          <div className="flex flex-col font-tandem-mono-medium uppercase">
            <p>{client}</p>
            <p className="text-gray-500">{clientPosition}</p>
          </div>
        </div>
      </div>
    </>
  );
}
