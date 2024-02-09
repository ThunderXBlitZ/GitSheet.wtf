document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table');
    populateTable(window.data, table);
  });
  
  function createHeader(headerText) {
    const header = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
    header.appendChild(headerRow);
    return header;
  }
  
  function createRow(cells) {
    const row = document.createElement('tr');
  
    cells.forEach((cellData) => {
      const cell = document.createElement('td');
      cell.textContent = cellData;
      row.appendChild(cell);
  
      if (cellData === cells[0]) { // Assuming first cell is copyable
        cell.setAttribute('data-cell', 'copy');
      }
    });
  
    return row;
  }
  
  function addButtonToRow(row) {
    const buttonCell = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.classList.add('btn', 'btn-secondary');
    button.addEventListener('click', () => {
      const textToCopy = row.querySelector('[data-cell="copy"]').textContent;
      navigator.clipboard.writeText(textToCopy);
    });
    buttonCell.appendChild(button);
    row.appendChild(buttonCell);
  }
  
  function populateTable(data, table) {
    table.innerHTML = '';
  
    data.forEach((sectionData) => {
      const header = createHeader(sectionData.header);
      table.appendChild(header);
  
      const tbody = document.createElement('tbody');
      sectionData.records.forEach((recordsData) => {
        const row = createRow(recordsData);
        addButtonToRow(row);
        tbody.appendChild(row);
      });
  
      table.appendChild(tbody);
    });
  }