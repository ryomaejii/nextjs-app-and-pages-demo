import Image from "next/image";
import Link from "next/link";

export default function AppRouteWithOutPrefetch() {
  return (
    <div className="py-20 px-8">
      <h1 className="text-4xl font-bold">App Route without Prefetch</h1>
      <p className="pt-8 text-lg">This is not prefetched route example</p>
      <div className="pt-20">
        <Image
          src="vercel.svg"
          alt="Placeholder image"
          width={400}
          height={400}
        />
      </div>
      <div className="mt-8">
        <Link href="/" className="underline text-2xl">
          Top
        </Link>
      </div>
    </div>
  );
}
