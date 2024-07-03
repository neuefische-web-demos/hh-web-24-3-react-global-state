import Link from 'next/link';

export default function Header({ animalSum }) {
  return (
    <Link href="/">
      CounterApp
      <span role="img" aria-label="trademark">
        ™
      </span>
      — currently counting <strong>{animalSum}</strong> things.
    </Link>
  );
}
