const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Step 1: Get all elements with class "price"
  const priceCells = document.querySelectorAll(".price");
  
  let total = 0;

  // Step 2: Loop through all price cells and add their numeric values
  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent);
    if (!isNaN(value)) {
      total += value;
    }
  });

  // Step 3: Create a new row
  const totalRow = document.createElement("tr");

  // Step 4: Create a cell to show the total, spanning 2 columns
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: ₹" + total;
  totalCell.style.fontWeight = "bold";
  totalCell.style.textAlign = "right";

  // Step 5: Append the cell to the row, and row to the table
  totalRow.appendChild(totalCell);

  const table = document.querySelector("table");
  table.appendChild(totalRow);

  // Optional: Disable button after one click to prevent multiple totals
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
