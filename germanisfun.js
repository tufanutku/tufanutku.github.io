
            $('#p2').hide();
            var numText = ['Null', 'Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn'];
            var ulText = $('#numName');
            var ulNum = $('#numNumeric');
            var dimx = $('body').width();
            var dimy = $('body').height();
            for(var i = 0; i < numText.length; i++){
                ulText.append('<li id="t' + (i) + '">' + numText[i] + '</li>');
                ulNum.append('<li id="n' + (i) + '">' + (i) + '</li>');
            }
            var hidden = 0;
            for(var i = 0; i < numText.length; i++){
                $("#n" + i).data("index", {index: i});
                $("#t" + i).data("index", {index: i});
                $("#n" + i).draggable({
                   cursor: "move" 
                });
                        //.css("color", "red")
                        //.css("border", "grove")
                        //.css("border-top-color","yellow")
                        //.css("border-bottom-color","yellow")
                        //.css("border-left-color","green")
                        //.css("border-right-color","green")
                        //.css("border-width","5px");
                $("#t" + i).droppable({drop: function (event, ui) {
                    var ni = ui.draggable.attr("id");
                    var ti = this.id;
                    var niElem = $('#' + ni);
                    var tiElem = $('#' + ti);
                    if(niElem.data("index").index === tiElem.data("index").index){
                        //correct
                        niElem.draggable("disable");
                        niElem.css("display", "none");
                        hidden++;
                        
                        if(hidden === numText.length){
                            $('ul').randomize();
                            $('#numbers').css("display","none");
                            $('#p1').hide();
                            $('#p2').show();
                            $('#numName').sortable({
                                start: function(event, ui){
                                },
                                update: function(event, ui){
                                    var ordered = 0;
                                    for(var j = 0; j < numText.length; j++){
                                        if($('#t' + j).index() === j)
                                            ordered++;
                                    }
                                    if(ordered === numText.length)
                                        $('#popUpBackground').fadeIn();
                                        $('#popUpBox').fadeIn();
                                        
                                        $('#close').click(function () {
                                        $('#popUpBackground').fadeOut();
                                        $('#popUpBox').fadeOut();
                                        });
                                }
                            });
                        }
                    } else{
                        //wrong
                        var left = Math.floor((Math.random() * (dimx - 20)) + 10);
                        var top = Math.floor((Math.random() * (dimy - 20)) + 10);
                        niElem.css("left", left+"px"); 
                        niElem.css("top", top+"px");
                        niElem.css("color","black");
                        niElem.css("font-size","30px");
                    }
                            
                }});
            }
            $.fn.randomize = function (selector) {
                var $elems = selector ? $(this).find(selector) : $(this).children(),
                        $parents = $elems.parent();
                $parents.each(function () {
                    $(this).children(selector).sort(function () {
                        return Math.round(Math.random()) - 0.5;
                        // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
                    }).detach().appendTo(this);
                });
                return this;
            };
            $('ul').randomize();