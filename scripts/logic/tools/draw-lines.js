// Dessine une ligne
function drawLine(x,y,length,color){
	for(var i=0;i<length;i++){
		drawPixel(x+i,y,color);
	}
}

// Dessine une colonne
function drawColumn(x,y,length,color){
	for(var i=0;i<length;i++){
		drawPixel(x,y+i,color);
	}
}

// Fonctions pour dessiner des lignes diagonales
	// Dessine une diagonale "Haut-Gauche" vers "Bas-Droite"
function drawDiagonalTopLeftToBottomRight(x,y,length,color){
	for(var i=0;i<length;i++){
		drawPixel(x+i,y+i,color);
	}
}

	// Dessine une diagonale "Haut-Droite" vers "Bas-Gauche"
function drawDiagonalTopRightToBottomLeft(x,y,length,color){
	for(var i=0;i<length;i++){
		drawPixel(x-i,y+i,color);
	}
}

	// Dessine une diagonale "Bas-Droite" vers "Haut-Gauche"
function drawDiagonalBottomRightToTopLeft(x,y,length,color){
	for(var i=0;i<length;i++){
		drawPixel(x-i,y-i,color);
	}
}

	// Dessine une diagonale "Bas-Gauche" vers "Haut-Droite"
function drawDiagonalBottomLeftToTopRight(x,y,length,color){
	for(var i=0;i<length;i++){
		drawPixel(x+i,y-i,color);
	}
}
