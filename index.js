// Tutaj napisz swój kod

const trElements = document.querySelectorAll("tbody tr");
const tableBody = document.querySelector("tbody");
const buttonSort = document.querySelector("a");

const datasArray = [];
const sortData = (e) => {
  trElements.forEach((el) => el.remove());

  trElements.forEach((element) => {
    const tdElement = element.querySelectorAll("td");
    let newData = {
      method: tdElement[0].innerHTML,
      name: tdElement[1].innerHTML,
      time: tdElement[2].innerHTML,
    };
    datasArray.push(newData);
  });
  console.log(datasArray);

  datasArray.sort(sortNumbers);
  addSortedData();
};

const sortNumbers = (a, b) => {
  return a.time - b.time;
};

const addSortedData = () => {
  let newElement = "";
  datasArray.forEach((obj) => {
    secondsFormat(obj);
    newElement += `<tr>
      <td class="border px-4 py-2">${obj.method}</td>
      <td class="border px-4 py-2">${obj.name}</td>
      <td class="border px-4 py-2">${secondsFormat(obj.time)}</td>
    </tr>`;
    tableBody.innerHTML = newElement;
  });
};

const secondsFormat = (seconds1) => {
  let secondsToNumber = parseInt(seconds1); // zmienić nazwę zmiennej!!!
  let hours = Math.floor(secondsToNumber / 3600);
  let minutes = Math.floor((secondsToNumber - hours * 3600) / 60);
  let seconds = Math.floor(secondsToNumber - hours * 3600 - minutes * 60);

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

buttonSort.addEventListener("click", sortData);
