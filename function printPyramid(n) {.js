function printPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// ตัวอย่างการใช้งาน
const numRows = 5;
printPyramid(numRows);


function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// ตัวอย่างการใช้งาน
const numRows = 5;
printPyramid(numRows);
