const hello = () => {
  console.log('Hello!')
};

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
  return () => {
    console.log('Hello!');
  }
}

hello(); // fungsi biasa
say(hello); // fungsi dengan argumen fungsi -> callback
sayHello()(); // fungsi yang mengembalikan fungsi

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});

