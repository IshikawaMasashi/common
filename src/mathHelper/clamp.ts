// https://qiita.com/pikohideaki/items/e08e9a3b70e465c39a5f
// const clamped = clamp(-5, 5)(-10)  // -5
//
const clamp = (min: number, max: number) => (x: number) =>
  x < min ? min : max < x ? max : x;

export default clamp;
