let code={
	"2":"abc", "3":"def", "4":"ghi", "5":"jkl", "6":"mno", "7":"pqrs", "8":"tu"v, "9":"wxyz"
}
let result=[];
function letterCombinations(input_digit) {
  //Complete the function
	solve(str(input_digit),0,"")
}
function solve(input_string,index,calculatedString){
	if(index>=input_string.length){
		result.push(calculatedString);
		return;
	}
	let currString=mapping[input_string[index]];
	for(let i=0;i<currString.length;i++){
		solve(input_string,index+1,calculatedString+currString[i]);
	}
}


module.exports = letterCombinations;
