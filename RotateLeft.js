// rotateLeft Problem solving using JavaScript

const  rotateLeft = (array, RotateIndexNumber)=>{
     const arrayRotated = [];
     for(i = RotateIndexNumber ; i < array.length; i++){
          arrayRotated.push(array[i])
     }

     for(i = 0; i < RotateIndexNumber; i++){
          arrayRotated.push(array[i])
     }

     return arrayRotated;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));