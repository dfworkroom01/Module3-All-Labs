//Fecthing the API url (no API Key needed). here I show that the API works and the endpoint I created also works.
//However, since the data consist of 200 points, I hardcode some of the arrays of the API data to the chart in html.
//I also learned that I should use react other svc to properly use chart.js with bigger data.
const apiUrl = "https://api.jsonserve.com/JueuKZ";
fetch("https://api.jsonserve.com/JueuKZ")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

getData();
async function getData() {
  const response = await fetch("https://api.jsonserve.com/JueuKZ");
  console.log(response);
  const data = await response.json();
  console.log(data);
  length = data.data.length;
  console.log(length);

  labels = [];
  values = [];
  for (i = 0; i < length; i++) {
    labels.push(data.data[i].year);
    values.push(
      data.data[i].distribution_of_pwd_by_main_reason_for_not_working
    );
  }
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Distribution of PWD not working (percentage)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
            "#CD5C5C",
            "#40E0D0",
          ],
          data: values,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Distribution 2018-2023",
      },
    },
  });
}



