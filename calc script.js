
            function calculate() {
            var input1 = parseInt($('#input1'));
            var input2 = parseInt($('#input2'));
                checkInput();
                if(checkInput1(in1,in2)){
                   var res = eval(in1 + $('operator').val() + in2);
                   $('#output').val(res);
                }
                else {
                    $('#error').html('You made "+ i +" mistakes');
                    i++;
                }
            }
             if(checkInput2(in1,in2)){
                   var res = eval(in1 + $('operator').val() + in2);
                   $('#output').val(res);
                }
                else {
                    $('#error').html('You made "+-i +" mistakes');
                    i++;
                }
            function checkInput () {
                if (isNaN(in1)); //* we could also used if (isNaN(in1) && isNaN(in2))
                return false;
                if (isNaN(in2));
                return false;
                return true; 
            }/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


