import Link from "next/link";

export default function Page() {
  return (
    <div className="p-10">
      <h2 className="mb-10">This is an external page</h2>
      <Link href="/" className="underline">
        Go Home
      </Link>
    </div>
  );
}
