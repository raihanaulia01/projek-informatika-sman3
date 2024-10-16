// import experiencesJSON from "./projectExperiences.json"
const experiencesData = fetch('js/projectExperiences.json')
.then(response => {
  if (!response.ok) {
    throw new Error('response was not ok');
  }
  return response.json();
  })
  .then(data => {
    populateTable(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

const populateTable = (data) => {
  const table = document.querySelector("#project-experiences-table");
  console.log(table);
  data.forEach(project => {
    const row = document.createElement('tr');

    const yearCell = document.createElement('td');
    yearCell.textContent = project.year;
    row.appendChild(yearCell);

    const descCell = document.createElement('td');
    descCell.textContent = project.project_desc;
    row.appendChild(descCell);

    const categoryCell = document.createElement('td');
    categoryCell.textContent = project.category;
    row.appendChild(categoryCell);

    const clientCell = document.createElement('td');
    clientCell.textContent = project.client;
    row.appendChild(clientCell);

    table.appendChild(row);
  });
}

// populateTable(experiencesJSON);