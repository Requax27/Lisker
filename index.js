let SDTA = [];

window.onload = function() {

    const stored = localStorage.getItem('SDTA');

    if (stored) {

        SDTA = JSON.parse(stored);

        SDTA.forEach(item => ADD(item));

    }
}

function makeChecklist() {

    const thing = prompt('추가할 할 일을 입력하세요', '개발자 후원하기');

    if (!thing) return;

    const newItem = { text: thing, checked: false };

    SDTA.push(newItem);

    localStorage.setItem('SDTA', JSON.stringify(SDTA));

    ADD(newItem);

    alert("추가되었습니다!");
}

function ADD(item) {

    const ele = document.getElementById('checkbox');

    const checkbox = document.createElement('input');

    const label = document.createElement('label');

    checkbox.type = 'checkbox';

    checkbox.checked = item.checked;

    checkbox.onchange = function() {

        item.checked = checkbox.checked;

        localStorage.setItem('SDTA', JSON.stringify(SDTA));
    }

    label.appendChild(checkbox);

    label.append(item.text);

    ele.appendChild(label);

    ele.appendChild(document.createElement('br'));

}

