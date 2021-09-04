// Tutaj napisz swój kod
const trElements = document.querySelectorAll('tbody tr');
const tableBody = document.querySelector('tbody');
const arrow = document.querySelector('a');

const sortData = () => {
  arrow.firstChild.classList.toggle('fa-caret-down');
  arrow.firstChild.classList.toggle('fa-caret-up');
  const datasArray = [];

  trElements.forEach(element => {
    const tdElement = element.querySelectorAll('td');
    let newData = {
      method: tdElement[0].innerHTML,
      name: tdElement[1].innerHTML,
      time: tdElement[2].innerHTML
    };
    datasArray.push(newData);
  });
  datasArray.sort(sortNumbers);
  addSortedData(datasArray);
};

const sortNumbers = (a, b) => {
  if (arrow.firstChild.classList.contains('fa-caret-down')) {
    return a.time - b.time;
  } else {
    return b.time - a.time;
  }
};

const secondsFormat = numberOfSeconds => {
  let secondsToNumber = parseInt(numberOfSeconds); // zmienić nazwę zmiennej!!!
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

const addAnimation = () => {
  const allTdElements = document.querySelectorAll('tbody tr td');
  allTdElements.forEach(td => {
    td.classList.add('fade');
    setTimeout(() => {
      td.classList.remove('fade');
    }, 500);
  });
};

const addSortedData = datasArray => {
  tableBody.innerHTML = '';
  datasArray.forEach(({ method, name, time }) => {
    let newElement = `<tr> 
                          <td class="border px-4 py-2">${method}</td>
                          <td class="border px-4 py-2">${name}</td>
                          <td class="border px-4 py-2">${secondsFormat(
                            time
                          )}</td>
                      </tr>`;
    tableBody.innerHTML += newElement;
  });
  addAnimation();
};
arrow.addEventListener('click', sortData);
