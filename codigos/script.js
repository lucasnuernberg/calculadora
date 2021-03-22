$(document).ready(function(){
    var number1 = 0
    var number2 = 0
    var resp = 0
    var limpar = false
    var cont = 0
    var operador;
    
    function funcOpera(operador, n1, n2) {
        if (operador == '+') {
            resp = n1 + n2;
        } else if (operador == '-') {
            resp = n1 - n2;
        } else if (operador == 'X') {
            resp = n1 * n2;
        } else if (operador == '÷') {
            resp = n1 / n2;
        }
        return resp;
    }
    
    $('button').click(function(){
        
        var valor = $(this).val()  ; 
        var result = $('#res');
        
        if (limpar) {
            result.html('');
        }
        if (valor == '+' || valor == '-' || valor == 'X' || valor == '÷' ) {
            operador = valor;
            number1 = +$('#res').text()
            limpar = true; 
            cont++ 
    
        } else if (valor == '=') {
            number2 = +$('#res').text()  
            
            var finalResult = funcOpera(operador, number1, number2);
    
            result.html(finalResult);
            limpar = true;
            cont = 0;
            number1Array = [];
            number2Array = [];
    
        } else {
            if (limpar) {
                result.html('');
            }
            result.append(valor)
            limpar = false;
        }
    
    
    
    })
    


})    
