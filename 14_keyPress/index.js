let insert = document.querySelector(".inner");


window.addEventListener('keydown',(e)=>{
    insert.innerHTML =
    `<div class='color'>
    <table border >
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>KeyName</th>
    </tr>
    <tr>
      <td>${e.key ===" " ?"Space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
     <div>
    `
})