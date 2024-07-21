var data = [
    {
        image : './images/pic1.png',
        name : "Day1",
        url : 'page1.html'
    },
    {
        image : './images/pic2.png',
        name : "Day2",
        url : 'page2.html'
    },
    {
        image : './images/pic3.png',
        name : "Day3",
        url : 'page3.html'
    },
    {
        image : './images/pic4.png',
        name : "Day4",
        url : 'page4.html'
    },
];

var div = document.getElementById('div1');

var string = "";

data.forEach((value) => {
    var temp = `
    <div class="card">
        <img src="${value.image}" alt="${value.name}">
        <p>${value.name}</p>
        <a href="${value.url}"><button>Click</button></a>
    </div>
    `;
    string += temp;
});

div.innerHTML = string;
