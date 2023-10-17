// var chars = []          
// const toPerm = 'abc'
function permute(A) {
    let len = A.length;
    if (len === 1) { 
      return A;
    }
    let pick = "";
    let permutations = [];
    for (let i = 0; i < len; i++) {
      pick = A[i];
      var remainder = A.slice(0, i) + A.slice(i + 1, len);
      for (var perm of permute(remainder)) {
        permutations.push(pick + perm);
    }
  }
  return permutations;
}
     
// console.log(JSON.stringify(Permute(toPerm)))

// Permute(toPerm)

//TODO: Idea 0: string to array
// function str2Arr(st) {
//     chars.push = st.split('');
//     return chars;
// }                                           // chars === [a,b,c,d]

// str2Arr(toPerm) 

// TODO: Idea 1:
// function Permute(str2Arr, String, manipulate) {
//     str2Arr(String)                     //Expect Array chars to be [a,b,c,d]
//     chars.forEach(element => {
//         manipulate(element)
//     });

// }

// Permute(toPerm)

//TODO: Idea 2:

// function manipulate(Arr) {                          // Arr === [a,b,c,d]
//     let Sply = Arr                                  // Sply === [a,b,c,d]
//     for (let i = 0; i < Sply.length; i++) {     
//         const Cut = Sply.splice(i, 1);              // Cut === [i] ... i.e.: cut is [a] Sply === [b,c,d]
//         if (Sply.length > 1) {                      // Sply.L = 3  >>> True
//             const Cut2 = Sply.splice(i, 1);         // Cut === [i] ... i.e.: cut2 is [b] Sply === [c,d]
//             if (Sply.length > 1) {                  // Sply.L = 2  >>> True
//                 const Cut3 = Sply.splice(i, 1);     // Cut === [i] ... i.e.: cut3 is [c] Sply === [d]
//                 if (Sply.length > 1) {              // Sply.L = 1  >>> False
//                     const Cut4 = Sply.splice(i, 1);
//                 }
//             }
//         } else {
//             // ToDo: Permute code                         // Cut is [a], cut2 is [b], cut3 is [c], Sply is [d]

//         }
//     }
// }
// manipulate(chars)