const random = (array: Array<any>) => {
  const randomIndex = ~~(Math.random() * array.length);
  return array[randomIndex];
};

export default random;
