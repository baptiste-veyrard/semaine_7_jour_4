function countUpperCaseChars(str) {
  var count=0,len=str.length;
  for(var i=0;i<len;i++) {
    if(/[A-Z]/.test(str.charAt(i))) count++;
  }
  return count;
}


console.log("Salut l'amis, essai de discuter avec moi :")

for(let count = 0; count <=10; count++){

	if (count === 10) {
		console.log("T'es bien sympa l'amis, mais c'est la dernière fois que tu me parles, j'ai d'autre chats à foueter !");
	}

	var userPrompt = prompt();
	var lastchar = userPrompt[userPrompt.length -1];

	if(lastchar === '?') {
		console.log ('Ouais ouais...');
	} 
	else if(countUpperCaseChars(userPrompt) > 3) {
		console.log('Woh, arrête de me crier dessus tu vas en prendre une !');
	}
	else if(userPrompt.includes('Fortnite')){
		console.log('On se fait une partie en soum-soum?');
	}
	else if(userPrompt.length === 0){
		console.log('Bah alors tu réponds plus? T\'s en PLS petite frappe?');
	}
	else{
		console.log('Balek');
	}

}