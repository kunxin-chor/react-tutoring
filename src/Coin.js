export default function Coin () {
    if (Math.random() > 0.5) {
        return <p>Head</p>
      } else {
        return <p>Tail</p>;
      }
}