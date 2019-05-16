let choice = prompt("De quel nombre veut tu calculer la factorielle ?");

function factorielle(choice) {
if (choice<0) { 
	alert ("Veuillez Saisir Un Entier Positif ou null"); 
	return "### Erreur ###"; 
} 
else { 
	if (choice == 0) { 
	return 1; 
} 
	else { 
	return choice * factorielle(choice-1); 
	} 
	} 
} 

console.log(`Le résultat est : ${factorielle(choice)}`)