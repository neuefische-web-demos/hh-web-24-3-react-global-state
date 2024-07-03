import Counter from '@/components/Counter';
import Link from 'next/link';
import styled from 'styled-components';

export default function CountersPage({ animals, onAdd, onSubtract }) {
  return (
    <main>
      <h1>List of all counters</h1>
      <List>
        {animals.map((animal) => (
          <Counter key={animal.id} animal={animal} onAdd={onAdd} onSubtract={onSubtract} />
        ))}
      </List>
      <Link href="/">← Back to HomePage</Link>
    </main>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;
