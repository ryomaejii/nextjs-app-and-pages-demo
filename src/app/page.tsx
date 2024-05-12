import { ServerComponent } from "@/app/_components/ServerComponent";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="py-20 px-8 flex-col flex h-[200vh]">
      <h1 className="text-4xl font-bold">
        Next.js App Router and Pages Router Example
      </h1>
      <div className="pt-4">
        <Suspense
          fallback={
            <div>
              <p>Loading...</p>
            </div>
          }
        >
          <ServerComponent />
        </Suspense>
      </div>
      <div className="pt-8 flex flex-col gap-4">
        <Link href="/app-route-with-prefetch" className="underline text-2xl">
          App Route with Prefetch
        </Link>
        <Link
          href="/app-route-without-prefetch"
          className="underline text-2xl"
          prefetch={false}
        >
          App Route without Prefetch
        </Link>
        <Link href="/pages-route" className="underline text-2xl">
          Pages Route
        </Link>
      </div>
      <div className="flex-1"></div>
      <div className="fixed bottom-4 right-4">↓スクロールしてください</div>
      <Link
        href="/app-route-with-scroll-prefetch"
        className="underline text-2xl mt-8"
      >
        App Route with Scroll Prefetch
      </Link>
    </div>
  );
}
