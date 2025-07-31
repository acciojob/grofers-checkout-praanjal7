const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "price"
  const prices = document.querySelectorAll(".price");

  // Calculate the total sum
  let total = 0;
  prices.forEach(price => {
    total += Number(price.textContent.trim());
  });

  // Create a new row
  const newRow = document.createElement("tr");

  // Create a new cell with id="ans"
  const newCell = document.createElement("td");
  newCell.setAttribute("colspan", "2");
  newCell.setAttribute("id", "ans");
  newCell.textContent = total;

  // Append cell to row, and row to table
  newRow.appendChild(newCell);
  document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
