var arn1 = 'CCGUCGUUGCGCUACAGC';
var arn2 = 'CCUCGCCGGUACUUCUCG';

function transform(string) {

arr = string.match(/.{1,3}/g);
arr_transform = []
	arr.forEach(value => {

		switch (value) {
			case 'UCU': case 'UCC': case 'UCA': case 'UCG': case 'AGU': case 'AGC':
			value = 'Sérine';
			break;
			case 'CCU': case 'CCC': case 'CCA': case 'CCG':
			value = 'Proline';
			break;
			case 'UUA': case 'UUG':
			value = 'Leucine';
			break;
			case 'UUU': case 'UUC':
			value = 'Phénylalanine';
			break;
			case 'CGU': case 'CGC': case 'CGA': case 'CGG': case 'AGA': case 'AGG':
			value = 'Arginine';
			break;
			case 'UAU': case 'UAC':
			value = 'Tyrosine';
			break;
			default:
			value = 'Valeur non reconnue';
		}
		arr_transform.push(value)
	})
return arr_transform.join('-');
}

console.log(transform(arn1))





