// visualization.js, CHATGPT HELPED ME ORGANIZE MY ORIGINAL VSG FILE.

// Function to create the first SVG visualization
function createClassVisualization() {
    const svg1 = document.getElementById('vis1');

    // Original rectangles and their positions
    const classData = [
        { x: 200, y: 200, width: 100, height: 200, fill: 'green' },
        { x: 400, y: 300, width: 100, height: 100, fill: 'blue' },
        { x: 600, y: 100, width: 100, height: 300, fill: 'yellow' },
        { x: 800, y: 375, width: 100, height: 25, fill: 'orange' },
        { x: 1000, y: 275, width: 100, height: 125, fill: 'red' }
    ];

    classData.forEach(item => {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', item.x);
        rect.setAttribute('y', item.y);
        rect.setAttribute('width', item.width);
        rect.setAttribute('height', item.height);
        rect.setAttribute('fill', item.fill);
        svg1.appendChild(rect);
    });

    // Add text labels
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
        { x: 1050, y: 450, text: 'Work' }
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

// Function to create the second SVG visualization
function createSVGArt() {
    const svg2 = document.getElementById('vis2');

    // Ground
    const ground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    ground.setAttribute('x', '0');
    ground.setAttribute('y', '500');
    ground.setAttribute('width', '1200');
    ground.setAttribute('height', '100');
    ground.setAttribute('fill', 'green');
    svg2.appendChild(ground);

    // House
    const house = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    house.setAttribute('x', '425');
    house.setAttribute('y', '300');
    house.setAttribute('width', '350');
    house.setAttribute('height', '200');
    house.setAttribute('fill', 'beige');
    svg2.appendChild(house);

    // Roof
    const roof = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    roof.setAttribute('points', '425,300 775,300 600,200');
    roof.setAttribute('style', 'fill:brown');
    svg2.appendChild(roof);

    // Windows and other elements
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

    // Tree trunks
    const treeTrunks = [
        { x: 120, y: 310, width: 30, height: 190, fill: 'rgb(175, 100, 47)' },
        { x: 1020, y: 310, width: 30, height: 190, fill: 'rgb(175, 100, 47)' }
    ];
    treeTrunks.forEach(trunk => {
        const trunkRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        trunkRect.setAttribute('x', trunk.x);
        trunkRect.setAttribute('y', trunk.y);
        trunkRect.setAttribute('width', trunk.width);
        trunkRect.setAttribute('height', trunk.height);
        trunkRect.setAttribute('fill', trunk.fill);
        svg2.appendChild(trunkRect);
    });

    // Other elements (circles, ellipses, etc.)
    const circles = [
        { cx: 50, cy: 50, r: 100, fill: 'yellow' },
        { cx: 100, cy: 300, r: 60, fill: 'rgba(87, 189, 78, 0.719)' },
        { cx: 150, cy: 330, r: 70, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 170, cy: 280, r: 75, fill: 'rgba(67, 151, 59, 0.795)' },
        { cx: 1000, cy: 280, r: 75, fill: 'rgba(67, 151, 59, 0.795)' },
        { cx: 1070, cy: 280, r: 60, fill: 'rgba(87, 189, 78, 0.719)' },
        { cx: 1050, cy: 330, r: 70, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 400, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 430, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 465, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 500, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 800, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 765, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 730, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
        { cx: 700, cy: 480, r: 30, fill: 'rgba(81, 203, 70, 0.86)' },
    ];

    circles.forEach(circle => {
        const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circleElement.setAttribute('cx', circle.cx);
        circleElement.setAttribute('cy', circle.cy);
        circleElement.setAttribute('r', circle.r);
        circleElement.setAttribute('fill', circle.fill);
        svg2.appendChild(circleElement);
    });

    // Ellipses
    const ellipses = [
        { cx: 620, cy: 515, rx: 20, ry: 5, fill: 'rgb(196, 196, 196)' },
        { cx: 580, cy: 545, rx: 35, ry: 15, fill: 'rgb(196, 196, 196)' },
        { cx: 650, cy: 595, rx: 50, ry: 30, fill: 'rgb(196, 196, 196)' }
    ];

    ellipses.forEach(ellipse => {
        const ellipseElement = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
        ellipseElement.setAttribute('cx', ellipse.cx);
        ellipseElement.setAttribute('cy', ellipse.cy);
        ellipseElement.setAttribute('rx', ellipse.rx);
        ellipseElement.setAttribute('ry', ellipse.ry);
        ellipseElement.setAttribute('fill', ellipse.fill);
        svg2.appendChild(ellipseElement);
    });
}

function createSVGVegalite(){
    const svg3 = document.getElementById('vis3');

    Plot.plot({
        marks: [
          Plot.barY(Wii, {
            x: "Genre",
            y: "Global_Sales",
            fill: "#6e40aa",
            tip: true
          }),
          Plot.ruleY([0])
        ]
      })
}

// Call the functions to create the visualizations
createClassVisualization();
createSVGArt();