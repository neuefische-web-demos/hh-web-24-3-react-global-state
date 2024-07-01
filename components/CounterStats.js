export default function CounterStats() {
  // missed values

  const countAverage = '⚠️';
  const countSum = '⚠️';
  const dragonCount = '⚠️';

  return (
    <div>
      <h2>Counter Stats</h2>
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
    </div>
  );
}
