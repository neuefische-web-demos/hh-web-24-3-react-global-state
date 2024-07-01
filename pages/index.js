import Link from 'next/link';

export default function HomePage({ countAverage = '📦', countSum = '📦', dragonCount = '📦' }) {
  return (
    <main>
      <h1>Counter Stats</h1>
      <ul>
        <li>
          average:<strong>{countAverage}</strong>
        </li>
        <li>
          sum:<strong>{countSum}</strong>
        </li>
        <li>
          dragons:<strong>{dragonCount}</strong>
        </li>
      </ul>
      <Link href="/counters">To the counters →</Link>
    </main>
  );
}
