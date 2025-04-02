import { InformationCircleIcon, PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const commonButtonClasses =
  "flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5";

export function Banner() {
  return (
    <div className="mb-10 lg:mb-20">
      <div className="flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black">
          <Image
            src="/banner.png"
            alt="banner"
            fill={true}
            className="object-cover object-top opacity-30 filter lg:hidden"
          />
        </div>
        <h1 className="text-4xl font-bold lg:text-7xl">Rodrigo Brito</h1>
        <p className="text-shadow-md text-sm text-gray-300 md:max-w-lg md:text-lg lg:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum dolores quae tempore, repellat autem quibusdam.
        </p>
      </div>
      <div className="flex space-x-3">
        <Link href="/" className={`${commonButtonClasses} bg-white`}>
          <PlayIcon className="h-6" />
          Watch Now
        </Link>
        <button className={`${commonButtonClasses} bg-gray-600`}>
          <InformationCircleIcon className="h-6" />
          More Info
        </button>
      </div>
    </div>
  );
}
