
const colors = [
    'bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200',
    'bg-pink-200', 'bg-indigo-200', 'bg-emerald-200', 'bg-gray-200', 'bg-teal-200'
];

let lastColorIndex =-1;

document.getElementById('theme-btn').addEventListener('click', function() {
    const body = document.body;
    colors.forEach(color => body.classList.remove(color));

    let newColorIndex;
    do {
        newColorIndex = Math.floor(Math.random() * colors.length);
    } while (newColorIndex === lastColorIndex);

    body.classList.add(colors[newColorIndex]);
    lastColorIndex = newColorIndex;
});
