// import experiencesJSON from "./projectExperiences.json"
let experiences = [];
const experiencesData = fetch('js/projectExperiences.json')
.then(response => {
  if (!response.ok) {
    throw new Error('response was not ok');
  }
  return response.json();
  })
  .then(data => {
    populateTable(data, 0);
    experiences = data;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

let currentPage = 0;
let rowsPerPage = 10;

const populateTable = (data, page) => {
  const tableBody = document.querySelector("#project-experiences-table tbody");
  const start = page*rowsPerPage;
  const end = start+rowsPerPage;
  const paginatedData = data.slice(start, end);
  tableBody.innerHTML = "";
  
  paginatedData.forEach(project => {
    const row = document.createElement('tr');

    const yearCell = document.createElement('td');
    yearCell.textContent = project.year;
    yearCell.classList.add('year-cell');
    row.appendChild(yearCell);

    const descCell = document.createElement('td');
    descCell.textContent = project.project_desc;
    descCell.classList.add('desc-cell');
    row.appendChild(descCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = project.category;
    categoryCell.classList.add('category-cell');
    row.appendChild(categoryCell);

    const clientCell = document.createElement('td');
    clientCell.textContent = project.client;
    clientCell.classList.add('client-cell');
    row.appendChild(clientCell);

    tableBody.appendChild(row);
  });
}

document.getElementById("next").addEventListener("click", (e) => {
  e.preventDefault();
  if ((currentPage + 1) * rowsPerPage < experiences.length) {
    document.getElementById("next").classList.remove('disabled');
    document.getElementById("previous").classList.remove('disabled');

    if ((currentPage+2)*rowsPerPage > experiences.length) {
      document.getElementById("next").classList.add('disabled');
    }
    currentPage++;
    console.log(currentPage);
    populateTable(experiences, currentPage);
  }
});
document.getElementById("previous").addEventListener("click", (e) => {
  e.preventDefault();
  if (currentPage > 0) {
    document.getElementById("previous").classList.remove('disabled');
    if (currentPage-1 == 0) {
      document.getElementById("previous").classList.add('disabled');
    }
    currentPage--;
    console.log(currentPage);
    populateTable(experiences, currentPage);
  }
});