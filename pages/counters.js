import CounterList from '../components/CounterList';
import Link from 'next/link';

export default function CountersPage() {
  return (
    <>
      <CounterList />
      <Link href="/">← Back to HomePage</Link>
    </>
  );
}
