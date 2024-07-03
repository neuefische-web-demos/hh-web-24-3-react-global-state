import Link from 'next/link';

export default function HomePage({ animals, countAverage, animalSum, dragonCount }) {
  console.log('HOMEPAGE', animals);
  return (
    <main>
      <h1>Counter Stats</h1>
      <ul>
        <li>
          average:<strong>{countAverage}</strong>
        </li>
        <li>
          sum:<strong>{animalSum}</strong>
        </li>
        <li>
          dragons:<strong>{dragonCount}</strong>
        </li>
      </ul>
      <Link href="/counters">To the counters →</Link>
    </main>
  );
}
