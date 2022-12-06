// Moscow, London, USA, Canada

export const getRoute = (arr: any[]): any => {
  let route: any[] = [];
  let arr1: any[] = arr.slice();

  const startCity = arr1.map((obj) => Object.values(obj))
    .flat()
    .filter((value, index, array) => array.indexOf(value) === array.lastIndexOf(value))
    .find((el) => arr1.find(obj => obj.from === el));
  route.push(startCity);
  while (arr1.length) {
    arr1.forEach((obj, index) => {

      if (route[route.length - 1] === obj.from) {
        route.push(obj.to)
        arr1.splice(index, 1)
      }

    });
  }


  return route
}
