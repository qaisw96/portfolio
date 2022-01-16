export const createArray = (number) => {
  const returnedArray = [];

  for (let i = 0; i < number; i++) {
    returnedArray.push(i);
  }

  return returnedArray;
};
