
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
		
		alert(param_1)
		param_1 = 0;
	}
	else{
		if(param_1 ==0){
			param_1 = param;
		}
		else{
			param_2 = param;
		}
	}
}

























	


