import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="gap-4 z-10 items-center flex">
      <img src="/logo.png" width="60" height="60" alt="image of logo" />
      <span className="text-xl text-primary-100 font-semibold">M.E Hotel</span>
    </Link>
  );
}
