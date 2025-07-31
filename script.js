const btn = document.createElement("button");
    btn.textContent = "Get Total Price";
    document.body.appendChild(btn);

    // Jab button pe click ho, ye function chalega
    btn.onclick = function () {
      let total = 0;

      // Saare price elements ko lo
      const prices = document.querySelectorAll(".price");

      // Har price ko number mein convert karke total mein jodo
      for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].textContent);
      }

      // New row banao
      const row = document.createElement("tr");

      // Ek single cell banao, jisme total ho
      const cell = document.createElement("td");
      cell.colSpan = 2; // dono columns ko span kare
      cell.id = "ans";  // test cases ke liye id set karo
      cell.textContent = total;

      // Row mein cell jodo, table mein row jodo
      row.appendChild(cell);
      document.querySelector("table").appendChild(row);
    };