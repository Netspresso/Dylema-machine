const poss = ['walcz', 'przemyś to jeszcze raz'];
const addBtn = document.querySelector('.add');
const cleanBtn = document.querySelector('.clean');
const answer = document.querySelector('h1');

const addPoss = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    poss.push(input.value);
    console.log(poss);
    console.log(input.value);

}

const reset = (e) => {
    e.preventDefault();
    poss.splice(0, poss.length);
    console.log(poss);
}

addBtn.addEventListener('click', addPoss);
cleanBtn.addEventListener('click', reset)