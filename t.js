const MOCK_DATA = [
  { id: 1, name_animal: "Doggy", lived: "Ke Bang" },
  { id: 2, name_animal: "Bird", lived: "Da Huong" },
];

const a = MOCK_DATA.find((x) => x.id === 3);

console.log(a);
