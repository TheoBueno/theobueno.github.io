const A = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]; 



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

