
//HIDE BOTS SO THAT ONLY START BUTTON IS SHOWING:

        $(document).ready(function(){
                $("#allbots").hide();
        });


//START GAME AND HIDE START BUTTON, SHOW BOTS FOR SELECTION

        $("#gamestart").click(function(gamestart){
                $("#gamestart").hide();
                $("#allbots").show();
                $("#topbar").html('<h1>' + 'Pick your bacteria warrior!' + '<h1>');
                $('#midpick').append($('#allbots'))
        });


// SELECT PLAYERBOT on CLICK and MOVE OTHERS to SECOND ROW

        $(document).on('click','.bot', function(playerselect) {
                $('#toppick').append($(this)).addClass('playerpick');
                $('#allbots div').attr('class','bot2')
                $("#topbar").html('<h1>' + 'Pick your bacteria enemy' + '<h1>');
                originalHP = parseInt(($('#toppick .botlife').text()))
                });


//SELECT SECOND BOT, CHANGE BOT BORDER COLORS

        $(document).on('click','.bot2', function(enemyselect) {
                $('#bottompick').append($('#allbots')); 
                $('#midpick').append($(this)).addClass('enemypick');
                $('.enemypick .bot2 .green').attr('class', 'red');
                $('#bottompick .bot2 .green').attr('class', 'grey');
                $("#topbar").html('<img id="attack" src="images/attack.png">');     
                });




//ATTACK FUNCTION

        $(document).on('click','#attack', function(attack) {
                var playerpick = parseInt(($('#toppick .botlife').text()));
                var enemypick = parseInt(($('#midpick .botlife').text()));
                var playerdamage = Math.floor((Math.random()*30)+20);	
                var enemydamage = Math.floor((Math.random()*30)+15);	
                var newplayerpick = playerpick - enemydamage;
                var newenemypick = enemypick - playerdamage;

                $('#toppick .botlife').text(newplayerpick);
                $('#midpick .botlife').text(newenemypick);

                    if (newplayerpick <= 0) {
                        $("#topbar").html('<img src="images/youloose.png">');
                        playerpick = 0;
                        $('#toppick .botlife').text(playerpick);
                        $('#toppick .bot').hide();
                        $(document).on('click', '#topbar');//Refresh page
                        
                    }
                    if (newenemypick <= 0)  {
                        $("#topbar").html('<img src="images/youwin.png">');
                        enemypick = 0;
                        $('#midpick .botlife').text(enemypick);
                        $('#midpick .bot2').hide();
                        $('#toppick .botlife').text(originalHP);
                        $('#bottompick .bot2').attr('class','bot3');
                        
                    }

        });

            $(document).on('click','.bot3', function(enemyselect2) {
                $('#midpick').append($(this));
                $('#bottompick .bot3').attr('class', 'bot4');
                $('.bot3 .grey').attr('class','red');
                $("#topbar").html('<img id="attack" src="images/attack.png">');     
                });


            

