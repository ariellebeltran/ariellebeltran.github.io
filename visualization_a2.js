// visualization.js

function createClassVisualization() {
    const svg1 = document.getElementById('vis1');

    const colors = ['green', 'blue', 'yellow', 'orange', 'red'];
    const heights = [200, 100, 300, 25, 125];
    const xPositions = [200, 400, 600, 800, 1000];

    xPositions.forEach((x, index) => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', 200 + (400 - heights[index])); // Adjust y position based on height
        rect.setAttribute('width', 100);
        rect.setAttribute('height', heights[index]);
        rect.setAttribute('fill', colors[index]);
        svg1.appendChild(rect);
    });

    const textData = [
        { x: 50, y: 250, text: 'HOURS' },
        { x: 600, y: 550, text: 'WHAT I DO IN A WEEK' },
        { x: 150, y: 100, text: '16', weight: '700' },
        { x: 150, y: 200, text: '12', weight: '700' },
        { x: 150, y: 300, text: '8', weight: '700' },
        { x: 150, y: 400, text: '4', weight: '700' },
        { x: 250, y: 450, text: 'Watching Shows' },
        { x: 450, y: 450, text: 'Playing Games' },
        { x: 650, y: 450, text: 'Youtube' },
        { x: 850, y: 450, text: 'Studying' },
        { x: 1050, y: 450, text: 'Work' },
    ];

    textData.forEach(item => {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', item.x);
        text.setAttribute('y', item.y);
        text.setAttribute('font-family', 'Barlow Semi Condensed');
        text.setAttribute('font-size', '16');
        if (item.weight) text.setAttribute('font-weight', item.weight);
        text.setAttribute('fill', 'black');
        text.setAttribute('text-anchor', 'middle');
        text.textContent = item.text;
        svg1.appendChild(text);
    });
}

function createSVGArt() {
    const svg2 = document.getElementById('vis2');

    const ground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    ground.setAttribute('x', '0');
    ground.setAttribute('y', '500');
    ground.setAttribute('width', '1200');
    ground.setAttribute('height', '100');
    ground.setAttribute('fill', 'green');
    svg2.appendChild(ground);

    const house = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    house.setAttribute('x', '425');
    house.setAttribute('y', '300');
    house.setAttribute('width', '350');
    house.setAttribute('height', '200');
    house.setAttribute('fill', 'beige');
    svg2.appendChild(house);

    const roof = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    roof.setAttribute('points', '425,300 775,300 600,200');
    roof.setAttribute('style', 'fill:brown');
    svg2.appendChild(roof);

    const windows = [
        { x: 480, y: 375, width: 60, height: 70, fill: 'rgba(120, 120, 120, 0.719)' },
        { x: 660, y: 375, width: 60, height: 70, fill: 'rgba(120, 120, 120, 0.719)' },
        { x: 565, y: 400, width: 70, height: 100, fill: 'rgb(175, 100, 47)' }
    ];
    windows.forEach(win => {
        const windowRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        windowRect.setAttribute('x', win.x);
        windowRect.setAttribute('y', win.y);
        windowRect.setAttribute('width', win.width);
        windowRect.setAttribute('height', win.height);
        windowRect.setAttribute('fill', win.fill);
        svg2.appendChild(windowRect);
    });

}
createClassVisualization();
createSVGArt();