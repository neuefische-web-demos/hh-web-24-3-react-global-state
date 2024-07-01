import CounterStats from '@/components/CounterStats';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>The Counter App</h1>
      <CounterStats />
      <Link href="/counters">To the counters →</Link>
    </>
  );
}
