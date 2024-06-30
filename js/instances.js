const tiles = [
	//top left splotch
	new Block(0, 0),
	new Block(1, 0),
	new Block(2, 0),
	new Block(3, 0),
	new Block(4, 0),
	new Block(5, 0),
	new Block(0, 1),
	new Block(1, 1),
	new Block(2, 1),
	new Block(3, 1),
	new Block(4, 1),
	new Block(0, 2),
	new Block(1, 2),
	new Block(2, 2),
	new Block(3, 2),
	new Block(0, 3),
	new Block(1, 3),
	new Block(2, 3),
	new Block(0, 4),
	new Block(1, 4),
	new Block(0, 5),
	//T-Formation
	new Block(5, 7),
	new Block(5, 8),
	new Block(6, 7),
	new Block(6, 8)
];

const tanks = [
	new Tank(10, 240, dtr(260), dtr(380), "#224ACF", "#1E42B8", "#0101BA", 1),
	new Tank(200, 100, dtr(210), dtr(500), "#B82A55", "#B02951", "#B0896B", 1),
	new Tank(50, 400, dtr(100), dtr(220), "#3AB02E", "#37A62B", "#B0896B", 1),
	new Tank(400, 140, dtr(30), dtr(480), "#427D72", "#427d6d", "#B0896B", 1),
	new Tank(380, 520, dtr(110), dtr(600), "#934A9E", "#80408A", "#B0896B", 1)
];

for (var i = 0; i < tiles.length; i++) {
	tiles[i].render();
}

for (var i = 0; i < tanks.length; i++) {
	tanks[i].render();
}