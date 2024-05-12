import Link from "next/link";

export default function PagesRoute() {
  return (
    <div className="py-20 px-8">
      <h1 className="text-4xl font-bold">Pages Route</h1>
      <div className="mt-8">
        <Link href="/" className="underline text-2xl">
          Top
        </Link>
      </div>
    </div>
  );
}
