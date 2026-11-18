var canvas=document.getElementById("avatarCanvas");
var ctx=canvas.getContext("2d");

var GRID_SIZE=64; // Grille 64x64
var PIXEL_SIZE=canvas.width/GRID_SIZE; // Taille de chaque "pixel" (8x8 pixels physiques)

// Couleurs de la charte graphique Web
var COLORS={
	bg:"#161b22",
	lizardSkin:"#2ecc71", // Vert lézard
	html5:"#e34f26", // Orange HTML5
	css3:"#1572b6", // Bleu CSS3
	js:"#f7df1e", // Jaune JS
	textLight:"#ffffff",
	textDark:"#323330"
};
