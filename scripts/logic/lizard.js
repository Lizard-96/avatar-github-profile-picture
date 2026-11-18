// Dessine l'avatar de lizard-96 en pixel art
function drawLizard(x,y){
	// Tête
		// Centre
	drawRectangle(x,y,6,12,COLORS.lizardSkin);
		// Côté gauche
	drawColumn(x-1,y+1,10,COLORS.lizardSkin);
	drawColumn(x-2,y+2,8,COLORS.lizardSkin);
		// Côté droit
	drawColumn(x+6,y+1,10,COLORS.lizardSkin);
	drawColumn(x+7,y+2,8,COLORS.lizardSkin);
		// Museau
	drawLine(x+1,y-1,4,COLORS.lizardSkin);
	drawLine(x+2,y-2,2,COLORS.lizardSkin);
	// Yeux
		// Oeil gauche
	drawColumn(x-1,y+3,6,COLORS.js);
	drawColumn(x,y+3,6,COLORS.textDark);
	drawColumn(x+1,y+3,6,COLORS.js);
		// Oeil droit
	drawColumn(x+6,y+3,6,COLORS.js);
	drawColumn(x+5,y+3,6,COLORS.textDark);
	drawColumn(x+4,y+3,6,COLORS.js);
	// Cou
	drawLine(x+1,y+12,4,COLORS.lizardSkin);
	drawLine(x+2,y+13,2,COLORS.lizardSkin);
	// Colonne vertébrale et début queue
	drawRectangle(x+2,y+14,2,30,COLORS.html5);
	// Flanc gauche
	drawColumn(x+1,y+15,8,COLORS.css3);
	drawPixel(x+1,y+23,COLORS.lizardSkin);
	drawColumn(x+1,y+24,8,COLORS.css3);
	drawPixel(x+1,y+32,COLORS.lizardSkin);
	drawPixel(x+1,y+33,COLORS.css3);
	// Flanc droit
	drawColumn(x+4,y+15,8,COLORS.css3);
	drawPixel(x+4,y+23,COLORS.lizardSkin);
	drawColumn(x+4,y+24,8,COLORS.css3);
	drawPixel(x+4,y+32,COLORS.lizardSkin);
	drawPixel(x+4,y+33,COLORS.css3);
	// Patte avant gauche
	drawLine(x-10,y+14,12,COLORS.lizardSkin);
	drawDiagonalBottomRightToTopLeft(x-10,y+14,8,COLORS.lizardSkin);
	// Patte avant droite
	drawLine(x+4,y+14,12,COLORS.lizardSkin);
	drawDiagonalBottomLeftToTopRight(x+16,y+14,8,COLORS.lizardSkin);
	// Patte arrière gauche
	drawLine(x-6,y+34,8,COLORS.lizardSkin);
	drawLine(x-14,y+33,8,COLORS.lizardSkin);
	drawDiagonalBottomRightToTopLeft(x-15,y+32,3,COLORS.lizardSkin);
	// Patte arrière droite
	drawLine(x+4,y+34,8,COLORS.lizardSkin);
	drawLine(x+12,y+33,8,COLORS.lizardSkin);
	drawDiagonalBottomLeftToTopRight(x+20,y+32,3,COLORS.lizardSkin);
	// Queue
	drawRectangle(x+2,y+44,2,4,COLORS.js);
	drawSquare(x+1,y+48,2,COLORS.js);
	drawSquare(x-1,y+49,2,COLORS.js);
	drawSquare(x-3,y+50,2,COLORS.js);
	drawSquare(x-5,y+51,2,COLORS.js);
	drawLine(x-19,y+52,14,COLORS.js);
	drawDiagonalBottomRightToTopLeft(x-20,y+51,3,COLORS.js);
}
