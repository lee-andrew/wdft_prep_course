//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else
    

    */
    if (choice == 1){
        reply = "reply 1"
    }
    else if (choice ==2){
        reply = "reply 2"
    }
    else{
    }
    
    console.log(reply);
    console.log(choice);
}

function askSwitch(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    /*
    Switch
    

    */
    switch (choice){
        case 1:
            reply = "reply 1";
            break;
        case 2:
            reply = "reply 2";
            break;
        default:
            break;
    }

    console.log(reply);
    console.log(choice);
}



ask();
askSwitch();

