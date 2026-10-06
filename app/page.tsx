import Link from "next/link";
import { VertexLogo } from "../components/ui/vertex-logo";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-10">
      <h1>
        <VertexLogo />
      </h1>
      <Link
        href="/design-system"
        className="type-body w-fit text-neutral-700 underline underline-offset-4 hover:text-primary-500"
      >
        View the Vertex design system
      </Link>
    </main>
  );
}
