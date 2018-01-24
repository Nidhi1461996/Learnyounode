function babySteps(input){
  if(input.length===0){
    return null;
  }
  return input.reduce( (sum,value) => {
    //can convert into map using const number = numbers.map(Number);

    let num1=Number(sum);
    let num2=Number(value);
    return num1+num2;
  });
}
module.exports=babySteps;
