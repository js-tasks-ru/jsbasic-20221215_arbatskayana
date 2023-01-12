function makeDiagonalRed(table) {
  i = 0
  while (i < table.rows.length) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
    i++;
  }
}
