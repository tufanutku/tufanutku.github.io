 var i = 1;
            
            function calculate() {
                var in1 = Number($('#inp1').val());
                var in2 = Number($('#inp2').val());
                if(checkInp(in1,in2)) {
                    var res = eval(in1 + $('#list').val() + in2);
                    $('#output').val(res);
                } else {
                    $('#error').html("You have mistaken "+ i +" times!");
                    i++;
                }
            }

            function checkInp(in1,in2) {
                if(!isNaN(in1) && isNaN(in2)){
                    return false;
                }
                if(isNaN(in1) && !isNaN(in2)){
                    return false;
                }
                if(isNaN(in1) && isNaN (in2)){
             
                    return false;
                }
                return true;
            }
