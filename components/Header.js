import Link from 'next/link';

export default function Header() {
  const countSum = '📦';

  return (
    <Link href="/">
      CounterApp
      <span role="img" aria-label="trademark">
        ™
      </span>
      — currently counting <strong>{countSum}</strong> things.
    </Link>
  );
}
