export default function heroSorting(array) {
  return array.sort((a, b) => b.health - a.health);
}
