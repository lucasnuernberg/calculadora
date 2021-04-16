$(document).ready(function(){
    var classes = [
                "btn btn-outline-primary",
                "btn btn-outline-secondary",
                "btn btn-outline-success",
                "btn btn-outline-danger",
                "btn btn-outline-warning",
                "btn btn-outline-info",
               "btn btn-outline-info",
                "btn btn-outline-info",
                "btn btn-outline-info",
                "btn btn-outline-danger"
    ]
    
    //adding numbers buttons
    for (let ind = 0; 10 > ind; ind++) {        
        let button = `<button type="button" value="${ind}" class="${classes[ind]}">${ind}</button>`;
        $('#primary').before(button);
    }
    let instaBt = `<button type="button" value="" class="btn btn-outline-dark"><a href="https://www.instagram.com/lucasnuernberg/" target="_blank" rel="noopener noreferrer"><img src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-5.png" style="width: 20px;" alt=""></a></button>`;
    $('#insta').append(instaBt);

    //defining variables of 2 numbers
    var number1 = 0
    var number2 = 0
    //defining booleans 
    var clear = false;
    var operaComFinalResult = false;
    //defining variables of the result
    var resp = 0
    var operator;
    var finalResult = 0;    
    
    //function that do the math
    function funcOpera(operator, n1, n2) {
        switch (operator) {
            case '+':
                resp = n1 + n2;                
                break;
            case '-':
                resp = n1 - n2;
                break
            case 'X':
                resp = n1 * n2;
                break;
            case '÷':
                resp = n1 / n2;
                break;
            default:
                alert('Any operator was found!');
                break;
        }
        return resp;

    }
    

    $('button').click(function(){
        
        var valor = $(this).val(); 
        var result = $('#res');
        
        //every time you click the button it will go through this check to clear the result
        if (clear) {
            result.html('');
        }

        //Here we check what type of button you are clicking on
        if (valor == '+' || valor == '-' || valor == 'X' || valor == '÷' ) {
            if (operaComFinalResult) {
                result.text(finalResult);
                number1 = finalResult
                
            } else {
                number1 = +$('#res').text()
            }
            operator = valor;
            clear = true;
            
    
        } else if (valor == '=') {
            number2 = +$('#res').text()  
            
            finalResult = funcOpera(operator, number1, number2);    
            result.html(finalResult);
            operaComFinalResult = true;
            clear = true;    
    
        } else {
            operaComFinalResult = false;
            //adding the value in the calculator header
            result.append(valor)
            clear = false;
        }
    
    
    
    })
    


})    
