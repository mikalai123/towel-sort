// console.log("nPIBET!!!")

module.exports = function towelSort(matrix) {
  const arr = matrix;
  if (arr == undefined) {
    return [];
  } else {
    let arr1 = [];
    const qqq = arr.filter((item, index) => index % 2);
    for (let index = 0; index < qqq.length; index++) {
       const element = qqq[index];
       element.reverse();
       // console.log(element);
    }
   //  console.log(arr);
    for (let index = 0; index < arr.length; index++) {
       const element = arr[index];
       console.log(element);
       // arr1.push(element);
       for (let index = 0; index < element.length; index++) {
           const element1 = element[index];
           arr1.push(element1);
       } 
    }
   return arr1;
  }





  // let arr1 = [];
  //  const qqq = arr.filter((item, index) => index % 2);
  //  for (let index = 0; index < qqq.length; index++) {
  //     const element = qqq[index];
  //     element.reverse();
  //     // console.log(element);
  //  }
  // //  console.log(arr);
  //  for (let index = 0; index < arr.length; index++) {
  //     const element = arr[index];
  //     console.log(element);
  //     // arr1.push(element);
  //     for (let index = 0; index < element.length; index++) {
  //         const element1 = element[index];
  //         arr1.push(element1);
  //     } 
  //  }
  // return arr1;
}
