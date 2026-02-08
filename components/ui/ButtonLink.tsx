import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-[var(--radius)] px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-2)] focus-visible:ring-offset-2";

  const styles =
    variant === "primary"
      ? "bg-[color:var(--brand)] text-white hover:opacity-90"
      : "bg-transparent text-[color:var(--ink)] ring-1 ring-[color:var(--line)] hover:bg-white/60";

  return (
    <Link href={href} className={[base, styles, className].join(" ")}>
      {children}
    </Link>
  );
}

