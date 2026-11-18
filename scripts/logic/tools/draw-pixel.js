function drawPixel(x,y,color){
	if(x>=0 && x<GRID_SIZE && y>=0 && y<GRID_SIZE){
		ctx.fillStyle=color;
		ctx.fillRect(x*PIXEL_SIZE,y*PIXEL_SIZE,PIXEL_SIZE,PIXEL_SIZE);
	}
}
