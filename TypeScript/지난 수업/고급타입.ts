interface Bird {
  type: "bird"; // 타입 배정은 타입으로 저장될 수 있는 값, 즉 문자열의 값의 범위를 좁혀줌
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

type Combinable = string | number;

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;

function add2(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2("Max", " Schwarz");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};
// 자바스크립트에서 런타임 에러 피하는 방법
console.log(fetchedUserData.job && fetchedUserData.job.title);
// 타입스크립트에서 선택적 체이닝
console.log(fetchedUserData?.job?.title);
