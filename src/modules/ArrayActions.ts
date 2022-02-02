//Get sum of property values from array
const sumArrProps = (arr: any[], prop: string) => {
  const sum: number = arr.reduce((a: any, b: any): number => {
    return +a + +b[prop];
  }, 0);
  return sum;
};

//Add dollar sign in front of strings in array
const dollaBills = (arr: any[]): any[] => {
  return arr.map((item) => "$" + item);
};

export { dollaBills, sumArrProps };
