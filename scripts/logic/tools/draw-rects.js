// Fonctions pour dessiner des quadrilatères
	// Dessine un carré
function drawSquare(x,y,side,color){
	for(var i=0;i<side;i++){
		for(var j=0;j<side;j++){
			drawPixel(x+i,y+j,color);
		}
	}
}

	// Dessine un rectangle
function drawRectangle(x,y,length,width,color){
	for(var i=0;i<length;i++){
		for(var j=0;j<width;j++){
			drawPixel(x+i,y+j,color);
		}
	}
}
