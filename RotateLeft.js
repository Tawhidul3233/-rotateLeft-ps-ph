// rotateLeft Problem solving using JavaScript

const  rotateLeft = (array, number)=>{
     // Create new array for After Rotated array
     const arrayRotated = [];

     // Loop through array beginning number and push the new index value arrayRotated array.
     for(i = number ; i < array.length; i++){
          arrayRotated.push(array[i])
     }

     // Loop through array beginning at 0 until number again push new index value in arrayRotated array.
     for(i = 0; i < number; i++){
          arrayRotated.push(array[i])
     }

     return arrayRotated;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 4));