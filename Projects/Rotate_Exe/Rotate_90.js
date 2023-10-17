const A = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]; 

// var grid = document.getElementById(grid)
// function createGrid(A) {
//   let L = A.length
//   for (let row = 0; row < L; row++) {
//     for (let col = 0; col < L; col++) {
      
//       let div = document.createElement('div')   
//       div.id = `box ${row}_${col}`
//       div.className = `box`
//       div.innerHTML = `box ${A[row][col]}`
//       document.getElementById('grid').appendChild(div)
//     }
//   }
// }
// createGrid(A)

function transpose(A) {
	// we need only swap upper triangle with lower
	let N = A.length;
	for (let i = 0; i < N - 1; i++) {
		for (let j = i + 1; j < N; j++) {
			swap(A, i, j, j, i);
		}
	} console.log("Totally Transposed!")
}

function swap(A, i, j, k, l) {
	let temp = A[j][i];
	A[j][i] = A[l][k];
	A[l][k] = temp;
}

function exchangeCols(A) { 
  let lenR = A.length
  let lenC = Math.floor(lenR / 2)
  for (let row = 0; row < lenR; row++) {
    for (let col = 0; col <= lenC - 1; col++) {   
      swap(A, col , row, lenR - 1 - col, row);
    }
  } console.log("Flip Flopped!")
}

function rotateMatrix(A) {
	transpose(A);
	exchangeCols(A);
}

// rotateMatrix(A)
// console.log(JSON.stringify(A));

//For testing:
//exchangeCols(A)
//console.log(A)

// The Below exchangeColsV3 code works, trying to improve a v.4 (// V.4 - SQUARE matrixes)

// function exchangeColsv3(A) {
//   let L = A.length
//   for (let x = 0; x < L; x++) {
//     for (let y = 0; y <= Math.floor(A[x].length / 2) - 1; y++) {   
//       swap(A, y , x, A[x].length - (y + 1), x)
//     }
//   }
// }

// The Below exchangeColsV2 code works, trying to improve a v.3

// function exchangeColsV2(A) {
//   let N = A.length;
//   for (let i = 0; i < N; i++){
//     let B = [];
//     let Temp = A
//     for (let j = A[i].length -1; j >= 0; j--) {
//       B.push(Temp[i].pop()); 
//     }   
//     for (let j = B.length -1; j >= 0; j--) {
//     A[i] = B;
//   }}
// }

//  - .splice(): X = arrayname.splice(firstValue, CutLengthCanBeZero, Spliced.New.Elements, ContinueAddingNewAddedElements ) = creates a new array cutting out the original array. AND you can SPLICE IN other elements, or even not remove anything.

