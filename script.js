console.log("SCRIPT DANG CHAY");
const csvUrl =
"https://docs.google.com/spreadsheets/d/1AWZRIlJTNjbVUdLm4X-oItdpyBzfO6kq/export?format=csv&gid=20758593";

fetch(csvUrl)
  .then(response => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p>Response: ${response.status}</p>`
    );
    return response.text();
  })
  .then(data => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<pre>${data.substring(0, 500)}</pre>`
    );
  })
  .catch(error => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p>Lỗi: ${error}</p>`
    );
  });
