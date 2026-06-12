
const csvUrl =
"https://docs.google.com/spreadsheets/d/1AWZRIlJTNjbVUdLm4X-oItdpyBzfO6kq/export?format=csv&gid=20758593";

fetch(csvUrl)
  .then(response => response.text())
  .then(data => {
    console.log(data);

    const rows = data.trim().split("\n");

    rows.forEach(row => {
      console.log(row.split(","));
    });
  })
  .catch(error => console.error(error));
