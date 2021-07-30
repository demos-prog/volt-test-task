let users = [
  { name: "Billy", age: 23, job: "cleaner" },
  { name: "Jeccy", age: 56, job: "meneger" },
  { name: "John", age: 15, job: "director" },
];

interface User {
  name: string;
  age: number;
  job: string;
}

declare let data: User[] = users.slice();
