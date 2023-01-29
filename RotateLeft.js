// rotateLeft Problem solving using JavaScript

const  rotateLeft = (array, RotateIndexNumber)=>{
     // Create new array for After Rotated array
     const arrayRotated = [];

     // Loop through array beginning RotateIndexNumber and push the new index value arrayRotated array.
     for(i = RotateIndexNumber ; i < array.length; i++){
          arrayRotated.push(array[i])
     }

     // Loop through array beginning at 0 until RotateIndexNumber again push new index value in arrayRotated array.
     for(i = 0; i < RotateIndexNumber; i++){
          arrayRotated.push(array[i])
     }

     return arrayRotated;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));