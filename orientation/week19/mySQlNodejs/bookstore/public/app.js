const fillTable1 = (data) => {
  const container = document.querySelector('#book-data');

  data.books.forEach((rowData) => {
      const rowElem = document.createElement('tr');
      container.appendChild(rowElem);
      const rowDataSorted = [
          rowData.book_name,
          rowData.aut_name,
          rowData.cate_descrip,
          rowData.pub_name,
          rowData.book_price,
      ];
      rowDataSorted.forEach((cellData) => {
          const cellElem = document.createElement('td');
          rowElem.appendChild(cellElem);
          cellElem.textContent = cellData;
      });
  });
};

const fillTable2 = (data) => {
  const container = document.querySelector('#book-data');

  data.books.forEach((rowData) => {
      const row = `
          <tr>
              <td>${rowData.book_name}</td>
              <td>${rowData.aut_name}</td>
              <td>${rowData.cate_descrip}</td>
              <td>${rowData.pub_name}</td>
              <td>${rowData.book_price}</td>
          </tr>
      `;
      container.innerHTML += row;
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  let response, data;

  try {
      response = await fetch('/api/books');
      data = await response.json();
  } catch (err) {
      alert(err);
  }

  fillTable2(data);
});