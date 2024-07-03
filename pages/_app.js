import { useState } from 'react';
import GlobalStyle from '../styles';
import Header from '@/components/Header';

const initalAnimals = [
  { id: '1', name: 'Dogs', count: 0 },
  { id: '2', name: 'Cats', count: 0 },
  { id: '3', name: 'Dragons', count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initalAnimals);

  function handleAdd(animalID) {
    setAnimals(
      animals.map((animal) => {
        return animal.id === animalID ? { ...animal, count: animal.count + 1 } : animal;
      })
    );
  }

  function handleSubtract(animalID) {
    setAnimals(
      animals.map((animal) => {
        return animal.id === animalID ? { ...animal, count: animal.count - 1 } : animal;
      })
    );
  }
  // derived state
  // [ 0, 0, 0 ]
  const animalCounts = animals.map((animal) => animal.count);

  console.log('animal COUNTS', animalCounts);

  const animalSum = animalCounts.reduce((sum, animalCount) => sum + animalCount);

  console.log('animal SUM', animalSum);
  // summe der Zähler / Anzhal der Tier Arten
  const countAverage = animalSum / animalCounts.length;

  console.log('animal AVERAGE', countAverage);

  const dragonCount = animals.find((animal) => animal.name === 'Dragons').count;

  console.log('DRAGONS', dragonCount);

  return (
    <>
      <GlobalStyle />
      <Header animalSum={animalSum} />
      <Component
        {...pageProps}
        animals={animals}
        onAdd={handleAdd}
        onSubtract={handleSubtract}
        animalSum={animalSum}
        dragonCount={dragonCount}
        countAverage={countAverage}
      />
    </>
  );
}
