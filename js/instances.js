const tiles = [
	//T-Formation
	new Block(5, 7),
	new Block(5, 8),
	new Block(6, 7),
	new Block(6, 8),
	//zig zag
	new Block(10, 1),
	new Block(11, 1),
	new Block(12, 1),
	new Block(13, 1),
	new Block(14, 1),
	new Block(15, 1),
	new Block(16, 1),
	//random blocks
	new Block(15, 15),
	new Block(16, 15),
	new Block(15, 16),
	new Block(16, 16),

	new Block(23, 7),
	new Block(24, 7),
	new Block(23, 8),
	new Block(24, 8),
];

const tanks = [
	new Tank(10, 240, dtr(260), dtr(380), "#224ACF", "#1E42B8", "#0101BA", 1),
	new Tank(200, 100, dtr(210), dtr(500), "#B82A55", "#B02951", "#B0896B", 1),
	new Tank(400, 140, dtr(30), dtr(480), "#427D72", "#427d6d", "#B0896B", 1),
	new Tank(380, 520, dtr(110), dtr(600), "#934A9E", "#80408A", "#B0896B", 1),
	new Tank(750, 100, dtr(150), dtr(320), "#DEC951", "#C4B248", "#B0896B", 1),
	new Tank(950, 130, dtr(40), dtr(380), "#DBDBDB", "#CFCFCF", "#B0896B", 1),
	new Tank(950, 750, dtr(100), dtr(220), "#FF8A14", "#D47311", "#B0896B", 1),
	new Tank(1560, 550, dtr(130), dtr(500), "#4A4A4A", "#4D4D4D", "#B0896B", 1),
	new Tank(50, 660, dtr(30), dtr(320), "#000000", "#000000", "#B0896B", 1),
	new Tank(550, 770, 0, dtr(50), "#966A4B", "#8C6346", "#B0896B", 1),
	new Tank(1250, 150, dtr(100), dtr(380), "#D2B48C", "#B89D7A", "#B0896B", 1),

];

for (var i = 0; i < tiles.length; i++) {
	tiles[i].render();
}

for (var i = 0; i < tanks.length; i++) {
	tanks[i].render();
}