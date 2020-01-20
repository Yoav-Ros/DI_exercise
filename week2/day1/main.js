// let value = 0; 
// let operator = '';
// let second_value = 0;

// function my_f(i){
// 	if (typeof==Number){
// 		value = value + Number(i);
// 		f_value = value
// 		console.log(f_value);
// 		return f_value;
// 	}
// 	// else if(){

// 	// }
//  }



let param_1 = 0;
let param_2=0;
let symbol;

function my_f(param){
	if(param=='+' || param=='-' || param=='*'|| param=='/'){
		symbol = param;
	}
	else if (param=='='){
		if (symbol=='+'){
			param_1=param_1 + param_2;
		}
		else if (symbol=='-'){
			param_1=param_1 - param_2;
		}
		else if (symbol=='*'){
			param_1=param_1 * param_2;
		}
		else if (symbol=='/'){
			param_1=param_1 / param_2;
		}
	
		Alert(Param_1)
	}
	else{
		if(param_1 ==0){
			param_1=param;
		}
		else{
			param_2 =param;
		}
	}
}

























	


