$( document ).ready(function() {
    var triggering_key = 27; // ESC

    // query for the links that should receive letter-labeling
    lettermenu = $('.vimiumize-letter').children('ul').children('li').children('a');

    // query for the links that should receive number-labeling
    numbermenu = $('.vimiumize-number').children('ul').children('li').children('a');


    var showing = false;
    linkelements = {};
    plainlinks = {};
    usedChars = [];

    addElements(lettermenu, true);
    addElements(numbermenu, false);

    function addElements(list, namebased) {
        for (var i = 0; i < list.size(); i++) {
            var hotkey;
            var hotkeyKeyCode;
            if (namebased){
                hotkey = getAvailableChar($(list[i]).text(), usedChars);
                if (typeof hotkey == "string"){
                    hotkeyKeyCode = hotkey.charCodeAt(0);
                }
                else
                    continue;
            }
            else
                if (i < 9){
                    hotkeyKeyCode = (i+1)+48;
                    hotkey = (i+1).toString();
                }
            if (typeof hotkeyKeyCode == "number") {
                plainlinks[hotkeyKeyCode] = $(list[i]).attr('href');
                linkelements[hotkeyKeyCode] = $(list[i]);
                if (namebased)
                    $(list[i]).append("<div class='hotkey_label number_based_hotkey_label'>" + hotkey + "</div>");
                else
                    $(list[i]).append("<div class='hotkey_label letter_based_hotkey_label'>" + hotkey + "</div>");
        }
    }}

    function getAvailableChar(theString, usedChars) {
        theString = theString.replace(" ", "").toUpperCase();
        
        // Tries to find available char inside string
        for (var i in theString) {
            if (usedChars.indexOf(theString[i]) == -1){
                usedChars.push(theString[i]);
                return theString[i];
            }
        }

        // If no available char, uses first one from the alphabet
        var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var j=0; j<str.length; j++) {
            if (usedChars.indexOf(str[j]) == -1){
                usedChars.push(str[j]);
                return str[j];
            }
        }

        return null;
    }

    function go(keyCode) {
        var ref = plainlinks[keyCode];
        if (ref !== undefined) {
            window.location.assign(ref);
        }
    }

    $(document).keydown(function(e) {
        if (!e.altKey && !e.metaKey && !e.shiftKey) {
            var tast = e.keyCode || e.which;
            if (tast == triggering_key) {
                toggleshit();
                return;
            }
            if (!showing)
                return;
            e.preventDefault();
            console.log(tast);
            go(tast);
        }
    });

    function toggleshit() {
        if (showing) {
            showing = false;
            $('.hotkey_label').hide();
        }
        else {
            showing = true;
            $('.hotkey_label').show();
        }
    }

});