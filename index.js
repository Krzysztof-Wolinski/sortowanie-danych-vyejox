// Tutaj napisz swój kod

const trElements = document.querySelectorAll('tbody tr');
const buttonSort = document.querySelector('a');


const newData = new Object(
    // {module: "", autor: "", time: ""},
)

console.log(newData)
const sortData = () => {
    console.log('kliknąłeś mnie');
    trElements.forEach((element, index) => {
        const tdElement = element.querySelectorAll('td');
        console.log(tdElement)
        tdElement.forEach(td => {
            console.log(td)
        })
    });
    console.log(newData)
}



buttonSort.addEventListener('click', sortData);