let turn = true;

 square = (new Array(9)).fill("e");
 square2 = (new Array(9)).fill("e");
 square3 = (new Array(9)).fill("e");
 square4 = (new Array(9)).fill("e");
 square5 = (new Array(9)).fill("e");
 square6 = (new Array(9)).fill("e");
 square7 = (new Array(9)).fill("e");
 square8 = (new Array(9)).fill("e");
 square9 = (new Array(9)).fill("e");
 square10 = (new Array(9)).fill("e");

//puts the letter in the box
function assignLetter(id, player) {
    document.getElementById(id).innerHTML = player;
    document.getElementById(id).disabled = true;
}

//determines the letter
function getLetter(turn, id) {
    if (turn === true) {
        document.getElementById(id).style.color = "green";
        return "x";
    } else {
        document.getElementById(id).style.color = "red";
        return "o";
    }
}

//win conditions
function checkwin(square) {
    // Check vertically
    for (let i = 0; i < 3; i++) {
        if (
            square[3 * i] !== "e" &&
            square[3 * i] === square[3 * i + 1] &&
            square[3 * i + 1] === square[3 * i + 2]
        ) {
            return true;
        }
    }

    // Check horizontally
    for (let i = 0; i < 3; i++) {
        if (
            square[i] !== "e" &&
            square[i] === square[i + 3] &&
            square[i + 3] === square[i + 6]
        ) {
            return true;
        }
    }

    // Check diagonals
    if (
        square[0] !== "e" &&
        square[0] === square[4] &&
        square[4] === square[8]
    ) {
        return true;
    } else if (
        square[2] !== "e" &&
        square[2] === square[4] &&
        square[4] === square[6]
    ) {
        return true;
    } else {
        return false;
    }
}

//disable all buttons on win and make win screen
function wincon1(letter) {
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    if (letter == "x") {
        square10[0] = "x";
        document.getElementById("one").style.backgroundColor="green";
        document.getElementById("two").style.backgroundColor="green";
        document.getElementById("three").style.backgroundColor="green";
        document.getElementById("four").style.backgroundColor="green";
        document.getElementById("five").style.backgroundColor="green";
        document.getElementById("six").style.backgroundColor="green";
        document.getElementById("seven").style.backgroundColor="green";
        document.getElementById("eight").style.backgroundColor="green";
        document.getElementById("nine").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;
        }
    }
    if (letter == "o") {
        square10[0] = "o"
        document.getElementById("one").style.backgroundColor="red";
        document.getElementById("two").style.backgroundColor="red";
        document.getElementById("three").style.backgroundColor="red";
        document.getElementById("four").style.backgroundColor="red";
        document.getElementById("five").style.backgroundColor="red";
        document.getElementById("six").style.backgroundColor="red";
        document.getElementById("seven").style.backgroundColor="red";
        document.getElementById("eight").style.backgroundColor="red";
        document.getElementById("nine").style.backgroundColor="red";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;
        }
    }

    return "e";


}

function wincon2(letter) {
    document.getElementById("ten").disabled = true;
    document.getElementById("eleven").disabled = true;
    document.getElementById("twelve").disabled = true;
    document.getElementById("thirteen").disabled = true;
    document.getElementById("fourteen").disabled = true;
    document.getElementById("fifteen").disabled = true;
    document.getElementById("sixteen").disabled = true;
    document.getElementById("seventeen").disabled = true;
    document.getElementById("eighteen").disabled = true;

    if (letter == "x") {
        square10[1] = "x";
        document.getElementById("ten").style.backgroundColor="green";
        document.getElementById("eleven").style.backgroundColor="green";
        document.getElementById("twelve").style.backgroundColor="green";
        document.getElementById("thirteen").style.backgroundColor="green";
        document.getElementById("fourteen").style.backgroundColor="green";
        document.getElementById("fifteen").style.backgroundColor="green";
        document.getElementById("sixteen").style.backgroundColor="green";
        document.getElementById("seventeen").style.backgroundColor="green";
        document.getElementById("eighteen").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;
        }
    }
    if (letter == "o") {
        square10[1] = "o"
        document.getElementById("ten").style.backgroundColor="red";
        document.getElementById("eleven").style.backgroundColor="red";
        document.getElementById("twelve").style.backgroundColor="red";
        document.getElementById("thirteen").style.backgroundColor="red";
        document.getElementById("fourteen").style.backgroundColor="red";
        document.getElementById("fifteen").style.backgroundColor="red";
        document.getElementById("sixteen").style.backgroundColor="red";
        document.getElementById("seventeen").style.backgroundColor="red";
        document.getElementById("eighteen").style.backgroundColor="red";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;
        }
    }
    
    return "e";
}

function wincon3(letter) {
    document.getElementById("nineteen").disabled = true;
    document.getElementById("twenty").disabled = true;
    document.getElementById("twentyone").disabled = true;
    document.getElementById("twentytwo").disabled = true;
    document.getElementById("twentythree").disabled = true;
    document.getElementById("twentyfour").disabled = true;
    document.getElementById("twentyfive").disabled = true;
    document.getElementById("twentysix").disabled = true;
    document.getElementById("twentyseven").disabled = true;

    if (letter == "x") {
        square10[2] = "x";
        document.getElementById("nineteen").style.backgroundColor="green";
        document.getElementById("twenty").style.backgroundColor="green";
        document.getElementById("twentyone").style.backgroundColor="green";
        document.getElementById("twentytwo").style.backgroundColor="green";
        document.getElementById("twentythree").style.backgroundColor="green";
        document.getElementById("twentyfour").style.backgroundColor="green";
        document.getElementById("twentyfive").style.backgroundColor="green";
        document.getElementById("twentysix").style.backgroundColor="green";
        document.getElementById("twentyseven").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        square10[2] = "o"
        document.getElementById("nineteen").style.backgroundColor="red";
        document.getElementById("twenty").style.backgroundColor="red";
        document.getElementById("twentyone").style.backgroundColor="red";
        document.getElementById("twentytwo").style.backgroundColor="red";
        document.getElementById("twentythree").style.backgroundColor="red";
        document.getElementById("twentyfour").style.backgroundColor="red";
        document.getElementById("twentyfive").style.backgroundColor="red";
        document.getElementById("twentysix").style.backgroundColor="red";
        document.getElementById("twentyseven").style.backgroundColor="red";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}

function wincon4(letter) {
    document.getElementById("twentyeight").disabled = true;
    document.getElementById("twentynine").disabled = true;
    document.getElementById("thirty").disabled = true;
    document.getElementById("thirtyone").disabled = true;
    document.getElementById("thirtytwo").disabled = true;
    document.getElementById("thirtythree").disabled = true;
    document.getElementById("thirtyfour").disabled = true;
    document.getElementById("thirtyfive").disabled = true;
    document.getElementById("thirtysix").disabled = true;

    if (letter == "x") {
        square10[3] = "x";
        document.getElementById("twentyeight").style.backgroundColor="green";
        document.getElementById("twentynine").style.backgroundColor="green";
        document.getElementById("thirty").style.backgroundColor="green";
        document.getElementById("thirtyone").style.backgroundColor="green";
        document.getElementById("thirtytwo").style.backgroundColor="green";
        document.getElementById("thirtythree").style.backgroundColor="green";
        document.getElementById("thirtyfour").style.backgroundColor="green";
        document.getElementById("thirtyfive").style.backgroundColor="green";
        document.getElementById("thirtysix").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        square10[3] = "o"
        document.getElementById("twentyeight").style.backgroundColor="red";
        document.getElementById("twentynine").style.backgroundColor="red";
        document.getElementById("thirty").style.backgroundColor="red";
        document.getElementById("thirtyone").style.backgroundColor="red";
        document.getElementById("thirtytwo").style.backgroundColor="red";
        document.getElementById("thirtythree").style.backgroundColor="red";
        document.getElementById("thirtyfour").style.backgroundColor="red";
        document.getElementById("thirtyfive").style.backgroundColor="red";
        document.getElementById("thirtysix").style.backgroundColor="red";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}

function wincon5(letter) {
    document.getElementById("thirtyseven").disabled = true;
    document.getElementById("thirtyeight").disabled = true;
    document.getElementById("thirtynine").disabled = true;
    document.getElementById("forty").disabled = true;
    document.getElementById("fortyone").disabled = true;
    document.getElementById("fortytwo").disabled = true;
    document.getElementById("fortythree").disabled = true;
    document.getElementById("fortyfour").disabled = true;
    document.getElementById("fortyfive").disabled = true;

    if (letter == "x") {
        square10[4] = "x";
        document.getElementById("thirtyseven").style.backgroundColor="green";
        document.getElementById("thirtyeight").style.backgroundColor="green";
        document.getElementById("thirtynine").style.backgroundColor="green";
        document.getElementById("forty").style.backgroundColor="green";
        document.getElementById("fortyone").style.backgroundColor="green";
        document.getElementById("fortytwo").style.backgroundColor="green";
        document.getElementById("fortythree").style.backgroundColor="green";
        document.getElementById("fortyfour").style.backgroundColor="green";
        document.getElementById("fortyfive").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        square10[4] = "o"
        document.getElementById("thirtyseven").style.backgroundColor="red";
        document.getElementById("thirtyeight").style.backgroundColor="red";
        document.getElementById("thirtynine").style.backgroundColor="red";
        document.getElementById("forty").style.backgroundColor="red";
        document.getElementById("fortyone").style.backgroundColor="red";
        document.getElementById("fortytwo").style.backgroundColor="red";
        document.getElementById("fortythree").style.backgroundColor="red";
        document.getElementById("fortyfour").style.backgroundColor="red";
        document.getElementById("fortyfive").style.backgroundColor="red"
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}

function wincon6(letter) {
    document.getElementById("fortysix").disabled = true;
    document.getElementById("fortyseven").disabled = true;
    document.getElementById("fortyeight").disabled = true;
    document.getElementById("fortynine").disabled = true;
    document.getElementById("fifty").disabled = true;
    document.getElementById("fiftyone").disabled = true;
    document.getElementById("fiftytwo").disabled = true;
    document.getElementById("fiftythree").disabled = true;
    document.getElementById("fiftyfour").disabled = true;

    if (letter == "x") {
        square10[5] = "x";
        document.getElementById("fortysix").style.backgroundColor="green";
        document.getElementById("fortyseven").style.backgroundColor="green";
        document.getElementById("fortyeight").style.backgroundColor="green";
        document.getElementById("fortynine").style.backgroundColor="green";
        document.getElementById("fifty").style.backgroundColor="green";
        document.getElementById("fiftyone").style.backgroundColor="green";
        document.getElementById("fiftytwo").style.backgroundColor="green";
        document.getElementById("fiftythree").style.backgroundColor="green";
        document.getElementById("fiftyfour").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        square10[5] = "o"
        document.getElementById("fortysix").style.backgroundColor="red";
        document.getElementById("fortyseven").style.backgroundColor="red";
        document.getElementById("fortyeight").style.backgroundColor="red";
        document.getElementById("fortynine").style.backgroundColor="red";
        document.getElementById("fifty").style.backgroundColor="red";
        document.getElementById("fiftyone").style.backgroundColor="red";
        document.getElementById("fiftytwo").style.backgroundColor="red";
        document.getElementById("fiftythree").style.backgroundColor="red";
        document.getElementById("fiftyfour").style.backgroundColor="red";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}

function wincon7(letter) {
    document.getElementById("fiftyfive").disabled = true;
    document.getElementById("fiftysix").disabled = true;
    document.getElementById("fiftyseven").disabled = true;
    document.getElementById("fiftyeight").disabled = true;
    document.getElementById("fiftynine").disabled = true;
    document.getElementById("sixty").disabled = true;
    document.getElementById("sixtyone").disabled = true;
    document.getElementById("sixtytwo").disabled = true;
    document.getElementById("sixtythree").disabled = true;

    if (letter == "x") {
        square10[6] = "x";
        document.getElementById("fiftyfive").style.backgroundColor="green";
        document.getElementById("fiftysix").style.backgroundColor="green";
        document.getElementById("fiftyseven").style.backgroundColor="green";
        document.getElementById("fiftyeight").style.backgroundColor="green";
        document.getElementById("fiftynine").style.backgroundColor="green";
        document.getElementById("sixty").style.backgroundColor="green";
        document.getElementById("sixtyone").style.backgroundColor="green";
        document.getElementById("sixtytwo").style.backgroundColor="green";
        document.getElementById("sixtythree").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        document.getElementById("fiftyfive").style.backgroundColor="red";
        document.getElementById("fiftysix").style.backgroundColor="red";
        document.getElementById("fiftyseven").style.backgroundColor="red";
        document.getElementById("fiftyeight").style.backgroundColor="red";
        document.getElementById("fiftynine").style.backgroundColor="red";
        document.getElementById("sixty").style.backgroundColor="red";
        document.getElementById("sixtyone").style.backgroundColor="red";
        document.getElementById("sixtytwo").style.backgroundColor="red";
        document.getElementById("sixtythree").style.backgroundColor="red";
        square10[6] = "o"
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}

function wincon8(letter) {
    document.getElementById("sixtyfour").disabled = true;
    document.getElementById("sixtyfive").disabled = true;
    document.getElementById("sixtysix").disabled = true;
    document.getElementById("sixtyseven").disabled = true;
    document.getElementById("sixtyeight").disabled = true;
    document.getElementById("sixtynine").disabled = true;
    document.getElementById("seventy").disabled = true;
    document.getElementById("seventyone").disabled = true;
    document.getElementById("seventytwo").disabled = true;

    if (letter == "x") {
        square10[7] = "x";
        document.getElementById("sixtyfour").style.backgroundColor="green";
        document.getElementById("sixtyfive").style.backgroundColor="green";
        document.getElementById("sixtysix").style.backgroundColor="green";
        document.getElementById("sixtyseven").style.backgroundColor="green";
        document.getElementById("sixtyeight").style.backgroundColor="green";
        document.getElementById("sixtynine").style.backgroundColor="green";
        document.getElementById("seventy").style.backgroundColor="green";
        document.getElementById("seventyone").style.backgroundColor="green";
        document.getElementById("seventytwo").style.backgroundColor="green";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        document.getElementById("sixtyfour").style.backgroundColor="red";
        document.getElementById("sixtyfive").style.backgroundColor="red";
        document.getElementById("sixtysix").style.backgroundColor="red";
        document.getElementById("sixtyseven").style.backgroundColor="red";
        document.getElementById("sixtyeight").style.backgroundColor="red";
        document.getElementById("sixtynine").style.backgroundColor="red";
        document.getElementById("seventy").style.backgroundColor="red";
        document.getElementById("seventyone").style.backgroundColor="red";
        document.getElementById("seventytwo").style.backgroundColor="red";
        square10[7] = "o"
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}

function wincon9(letter) {
    document.getElementById("seventythree").disabled = true;
    document.getElementById("seventyfour").disabled = true;
    document.getElementById("seventyfive").disabled = true;
    document.getElementById("seventysix").disabled = true;
    document.getElementById("seventyseven").disabled = true;
    document.getElementById("seventyeight").disabled = true;
    document.getElementById("seventynine").disabled = true;
    document.getElementById("eighty").disabled = true;
    document.getElementById("eightyone").disabled = true;

    if (letter == "x") {
        document.getElementById("seventythree").style.backgroundColor="green";
        document.getElementById("seventyfour").style.backgroundColor="green";
        document.getElementById("seventyfive").style.backgroundColor="green";
        document.getElementById("seventysix").style.backgroundColor="green";
        document.getElementById("seventyseven").style.backgroundColor="green";
        document.getElementById("seventyeight").style.backgroundColor="green";
        document.getElementById("seventynine").style.backgroundColor="green";
        document.getElementById("eighty").style.backgroundColor="green";
        document.getElementById("eightyone").style.backgroundColor="green";
        square10[8] = "x";
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    if (letter == "o") {
        document.getElementById("seventythree").style.backgroundColor="red";
        document.getElementById("seventyfour").style.backgroundColor="red";
        document.getElementById("seventyfive").style.backgroundColor="red";
        document.getElementById("seventysix").style.backgroundColor="red";
        document.getElementById("seventyseven").style.backgroundColor="red";
        document.getElementById("seventyeight").style.backgroundColor="red";
        document.getElementById("seventynine").style.backgroundColor="red";
        document.getElementById("eighty").style.backgroundColor="red";
        document.getElementById("eightyone").style.backgroundColor="red";
        square10[8] = "o"
        if(checkwin(square10) == true)  {
            show_image(
                "https://www.pinclipart.com/picdir/big/71-717222_victory-clip-art.png",
                800,
                600,
                "win"
            );
            disable();
            return;

        }
    }
    
    return "e";
}
function reset() {
    if (document.getElementById("win") != null) {
        document.getElementById("win").remove();
    }
    document.getElementById("one").disabled = false;
    document.getElementById("two").disabled = false;
    document.getElementById("three").disabled = false;
    document.getElementById("four").disabled = false;
    document.getElementById("five").disabled = false;
    document.getElementById("six").disabled = false;
    document.getElementById("seven").disabled = false;
    document.getElementById("eight").disabled = false;
    document.getElementById("nine").disabled = false;
    document.getElementById("ten").disabled = false;
    document.getElementById("eleven").disabled = false;
    document.getElementById("twelve").disabled = false;
    document.getElementById("thirteen").disabled = false;
    document.getElementById("fourteen").disabled = false;
    document.getElementById("fifteen").disabled = false;
    document.getElementById("sixteen").disabled = false;
    document.getElementById("seventeen").disabled = false;
    document.getElementById("eighteen").disabled = false;
    document.getElementById("nineteen").disabled = false;
    document.getElementById("twenty").disabled = false;
    document.getElementById("twentyone").disabled = false;
    document.getElementById("twentytwo").disabled = false;
    document.getElementById("twentythree").disabled = false;
    document.getElementById("twentyfour").disabled = false;
    document.getElementById("twentyfive").disabled = false;
    document.getElementById("twentysix").disabled = false;
    document.getElementById("twentyseven").disabled = false;
    document.getElementById("twentyeight").disabled = false;
    document.getElementById("twentynine").disabled = false;
    document.getElementById("thirty").disabled = false;
    document.getElementById("thirtyone").disabled = false;
    document.getElementById("thirtytwo").disabled = false;
    document.getElementById("thirtythree").disabled = false;
    document.getElementById("thirtyfour").disabled = false;
    document.getElementById("thirtyfive").disabled = false;
    document.getElementById("thirtysix").disabled = false;
    document.getElementById("thirtyseven").disabled = false;
    document.getElementById("thirtyeight").disabled = false;
    document.getElementById("thirtynine").disabled = false;
    document.getElementById("forty").disabled = false;
    document.getElementById("fortyone").disabled = false;
    document.getElementById("fortytwo").disabled = false;
    document.getElementById("fortythree").disabled = false;
    document.getElementById("fortyfour").disabled = false;
    document.getElementById("fortyfive").disabled = false;
    document.getElementById("fortysix").disabled = false;
    document.getElementById("fortyseven").disabled = false;
    document.getElementById("fortyeight").disabled = false;
    document.getElementById("fortynine").disabled = false;
    document.getElementById("fifty").disabled = false;
    document.getElementById("fiftyone").disabled = false;
    document.getElementById("fiftytwo").disabled = false;
    document.getElementById("fiftythree").disabled = false;
    document.getElementById("fiftyfour").disabled = false;
    document.getElementById("fiftyfive").disabled = false;
    document.getElementById("fiftysix").disabled = false;
    document.getElementById("fiftyseven").disabled = false;
    document.getElementById("fiftyeight").disabled = false;
    document.getElementById("fiftynine").disabled = false;
    document.getElementById("sixty").disabled = false;
    document.getElementById("sixtyone").disabled = false;
    document.getElementById("sixtytwo").disabled = false;
    document.getElementById("sixtythree").disabled = false;
    document.getElementById("sixtyfour").disabled = false;
    document.getElementById("sixtyfive").disabled = false;
    document.getElementById("sixtysix").disabled = false;
    document.getElementById("sixtyseven").disabled = false;
    document.getElementById("sixtyeight").disabled = false;
    document.getElementById("sixtynine").disabled = false;
    document.getElementById("seventy").disabled = false;
    document.getElementById("seventyone").disabled = false;
    document.getElementById("seventytwo").disabled = false;
    document.getElementById("seventythree").disabled = false;
    document.getElementById("seventyfour").disabled = false;
    document.getElementById("seventyfive").disabled = false;
    document.getElementById("seventysix").disabled = false;
    document.getElementById("seventyseven").disabled = false;
    document.getElementById("seventyeight").disabled = false;
    document.getElementById("seventynine").disabled = false;
    document.getElementById("eighty").disabled = false;
    document.getElementById("eightyone").disabled = false;

    document.getElementById("one").innerHTML = "";
    document.getElementById("two").innerHTML = "";
    document.getElementById("three").innerHTML = "";
    document.getElementById("four").innerHTML = "";
    document.getElementById("five").innerHTML = "";
    document.getElementById("six").innerHTML = "";
    document.getElementById("seven").innerHTML = "";
    document.getElementById("eight").innerHTML = "";
    document.getElementById("nine").innerHTML = "";
    document.getElementById("ten").innerHTML = "";
    document.getElementById("eleven").innerHTML = "";
    document.getElementById("twelve").innerHTML = "";
    document.getElementById("thirteen").innerHTML = "";
    document.getElementById("fourteen").innerHTML = "";
    document.getElementById("fifteen").innerHTML = "";
    document.getElementById("sixteen").innerHTML = "";
    document.getElementById("seventeen").innerHTML = "";
    document.getElementById("eighteen").innerHTML = "";
    document.getElementById("nineteen").innerHTML = "";
    document.getElementById("twenty").innerHTML = "";
    document.getElementById("twentyone").innerHTML = "";
    document.getElementById("twentytwo").innerHTML = "";
    document.getElementById("twentythree").innerHTML = "";
    document.getElementById("twentyfour").innerHTML = "";
    document.getElementById("twentyfive").innerHTML = "";
    document.getElementById("twentysix").innerHTML = "";
    document.getElementById("twentyseven").innerHTML = "";
    document.getElementById("twentyeight").innerHTML = "";
    document.getElementById("twentynine").innerHTML = "";
    document.getElementById("thirty").innerHTML = "";
    document.getElementById("thirtyone").innerHTML = "";
    document.getElementById("thirtytwo").innerHTML = "";
    document.getElementById("thirtythree").innerHTML = "";
    document.getElementById("thirtyfour").innerHTML = "";
    document.getElementById("thirtyfive").innerHTML = "";
    document.getElementById("thirtysix").innerHTML = "";
    document.getElementById("thirtyseven").innerHTML = "";
    document.getElementById("thirtyeight").innerHTML = "";
    document.getElementById("thirtynine").innerHTML = "";
    document.getElementById("forty").innerHTML = "";
    document.getElementById("fortyone").innerHTML = "";
    document.getElementById("fortytwo").innerHTML = "";
    document.getElementById("fortythree").innerHTML = "";
    document.getElementById("fortyfour").innerHTML = "";
    document.getElementById("fortyfive").innerHTML = "";
    document.getElementById("fortysix").innerHTML = "";
    document.getElementById("fortyseven").innerHTML = "";
    document.getElementById("fortyeight").innerHTML = "";
    document.getElementById("fortynine").innerHTML = "";
    document.getElementById("fifty").innerHTML = "";
    document.getElementById("fiftyone").innerHTML = "";
    document.getElementById("fiftytwo").innerHTML = "";
    document.getElementById("fiftythree").innerHTML = "";
    document.getElementById("fiftyfour").innerHTML = "";
    document.getElementById("fiftyfive").innerHTML = "";
    document.getElementById("fiftysix").innerHTML = "";
    document.getElementById("fiftyseven").innerHTML = "";
    document.getElementById("fiftyeight").innerHTML = "";
    document.getElementById("fiftynine").innerHTML = "";
    document.getElementById("sixty").innerHTML = "";
    document.getElementById("sixtyone").innerHTML = "";
    document.getElementById("sixtytwo").innerHTML = "";
    document.getElementById("sixtythree").innerHTML = "";
    document.getElementById("sixtyfour").innerHTML = "";
    document.getElementById("sixtyfive").innerHTML = "";
    document.getElementById("sixtysix").innerHTML = "";
    document.getElementById("sixtyseven").innerHTML = "";
    document.getElementById("sixtyeight").innerHTML = "";
    document.getElementById("sixtynine").innerHTML = "";
    document.getElementById("seventy").innerHTML = "";
    document.getElementById("seventyone").innerHTML = "";
    document.getElementById("seventytwo").innerHTML = "";
    document.getElementById("seventythree").innerHTML = "";
    document.getElementById("seventyfour").innerHTML = "";
    document.getElementById("seventyfive").innerHTML = "";
    document.getElementById("seventysix").innerHTML = "";
    document.getElementById("seventyseven").innerHTML = "";
    document.getElementById("seventyeight").innerHTML = "";
    document.getElementById("seventynine").innerHTML = "";
    document.getElementById("eighty").innerHTML = "";
    document.getElementById("eightyone").innerHTML = "";

    document.getElementById("one").style.color = "black";
    document.getElementById("two").style.color = "black";
    document.getElementById("three").style.color = "black";
    document.getElementById("four").style.color = "black";
    document.getElementById("five").style.color = "black";
    document.getElementById("six").style.color = "black";
    document.getElementById("seven").style.color = "black";
    document.getElementById("eight").style.color = "black";
    document.getElementById("nine").style.color = "black";
    document.getElementById("ten").style.color = "black";
    document.getElementById("eleven").style.color = "black";
    document.getElementById("twelve").style.color = "black";
    document.getElementById("thirteen").style.color = "black";
    document.getElementById("fourteen").style.color = "black";
    document.getElementById("fifteen").style.color = "black";
    document.getElementById("sixteen").style.color = "black";
    document.getElementById("seventeen").style.color = "black";
    document.getElementById("eighteen").style.color = "black";
    document.getElementById("nineteen").style.color = "black";
    document.getElementById("twenty").style.color = "black";
    document.getElementById("twentyone").style.color = "black";
    document.getElementById("twentytwo").style.color = "black";
    document.getElementById("twentythree").style.color = "black";
    document.getElementById("twentyfour").style.color = "black";
    document.getElementById("twentyfive").style.color = "black";
    document.getElementById("twentysix").style.color = "black";
    document.getElementById("twentyseven").style.color = "black";
    document.getElementById("twentyeight").style.color = "black";
    document.getElementById("twentynine").style.color = "black";
    document.getElementById("thirty").style.color = "black";
    document.getElementById("thirtyone").style.color = "black";
    document.getElementById("thirtytwo").style.color = "black";
    document.getElementById("thirtythree").style.color = "black";
    document.getElementById("thirtyfour").style.color = "black";
    document.getElementById("thirtyfive").style.color = "black";
    document.getElementById("thirtysix").style.color = "black";
    document.getElementById("thirtyseven").style.color = "black";
    document.getElementById("thirtyeight").style.color = "black";
    document.getElementById("thirtynine").style.color = "black";
    document.getElementById("forty").style.color = "black";
    document.getElementById("fortyone").style.color = "black";
    document.getElementById("fortytwo").style.color = "black";
    document.getElementById("fortythree").style.color = "black";
    document.getElementById("fortyfour").style.color = "black";
    document.getElementById("fortyfive").style.color = "black";
    document.getElementById("fortysix").style.color = "black";
    document.getElementById("fortyseven").style.color = "black";
    document.getElementById("fortyeight").style.color = "black";
    document.getElementById("fortynine").style.color = "black";
    document.getElementById("fifty").style.color = "black";
    document.getElementById("fiftyone").style.color = "black";
    document.getElementById("fiftytwo").style.color = "black";
    document.getElementById("fiftythree").style.color = "black";
    document.getElementById("fiftyfour").style.color = "black";
    document.getElementById("fiftyfive").style.color = "black";
    document.getElementById("fiftysix").style.color = "black";
    document.getElementById("fiftyseven").style.color = "black";
    document.getElementById("fiftyeight").style.color = "black";
    document.getElementById("fiftynine").style.color = "black";
    document.getElementById("sixty").style.color = "black";
    document.getElementById("sixtyone").style.color = "black";
    document.getElementById("sixtytwo").style.color = "black";
    document.getElementById("sixtythree").style.color = "black";
    document.getElementById("sixtyfour").style.color = "black";
    document.getElementById("sixtyfive").style.color = "black";
    document.getElementById("sixtysix").style.color = "black";
    document.getElementById("sixtyseven").style.color = "black";
    document.getElementById("sixtyeight").style.color = "black";
    document.getElementById("sixtynine").style.color = "black";
    document.getElementById("seventy").style.color = "black";
    document.getElementById("seventyone").style.color = "black";
    document.getElementById("seventytwo").style.color = "black";
    document.getElementById("seventythree").style.color = "black";
    document.getElementById("seventyfour").style.color = "black";
    document.getElementById("seventyfive").style.color = "black";
    document.getElementById("seventysix").style.color = "black";
    document.getElementById("seventyseven").style.color = "black";
    document.getElementById("seventyeight").style.color = "black";
    document.getElementById("seventynine").style.color = "black";
    document.getElementById("eighty").style.color = "black";
    document.getElementById("eightyone").style.color = "black";    

    document.getElementById("one").style.backgroundColor="#00ccff";
    document.getElementById("two").style.backgroundColor="#00ccff";
    document.getElementById("three").style.backgroundColor="#00ccff";
    document.getElementById("four").style.backgroundColor="#00ccff";
    document.getElementById("five").style.backgroundColor="#00ccff";
    document.getElementById("six").style.backgroundColor="#00ccff";
    document.getElementById("seven").style.backgroundColor="#00ccff";
    document.getElementById("eight").style.backgroundColor="#00ccff";
    document.getElementById("nine").style.backgroundColor="#00ccff";
    document.getElementById("ten").style.backgroundColor="#e5ff00";
    document.getElementById("eleven").style.backgroundColor="#e5ff00";
    document.getElementById("twelve").style.backgroundColor="#e5ff00";
    document.getElementById("thirteen").style.backgroundColor="#e5ff00";
    document.getElementById("fourteen").style.backgroundColor="#e5ff00";
    document.getElementById("fifteen").style.backgroundColor="#e5ff00";
    document.getElementById("sixteen").style.backgroundColor="#e5ff00";
    document.getElementById("seventeen").style.backgroundColor="#e5ff00";
    document.getElementById("eighteen").style.backgroundColor="#e5ff00";
    document.getElementById("nineteen").style.backgroundColor="#b700ff";
    document.getElementById("twenty").style.backgroundColor="#b700ff";
    document.getElementById("twentyone").style.backgroundColor="#b700ff";
    document.getElementById("twentytwo").style.backgroundColor="#b700ff";
    document.getElementById("twentythree").style.backgroundColor="#b700ff";
    document.getElementById("twentyfour").style.backgroundColor="#b700ff";
    document.getElementById("twentyfive").style.backgroundColor="#b700ff";
    document.getElementById("twentysix").style.backgroundColor="#b700ff";
    document.getElementById("twentyseven").style.backgroundColor="#b700ff";
    document.getElementById("twentyeight").style.backgroundColor="#3cff00";
    document.getElementById("twentynine").style.backgroundColor="#3cff00";
    document.getElementById("thirty").style.backgroundColor="#3cff00";
    document.getElementById("thirtyone").style.backgroundColor="#3cff00";
    document.getElementById("thirtytwo").style.backgroundColor="#3cff00";
    document.getElementById("thirtythree").style.backgroundColor="#3cff00";
    document.getElementById("thirtyfour").style.backgroundColor="#3cff00";
    document.getElementById("thirtyfive").style.backgroundColor="#3cff00";
    document.getElementById("thirtysix").style.backgroundColor="#3cff00";
    document.getElementById("thirtyseven").style.backgroundColor="#00ffb3";
    document.getElementById("thirtyeight").style.backgroundColor="#00ffb3";
    document.getElementById("thirtynine").style.backgroundColor="#00ffb3";
    document.getElementById("forty").style.backgroundColor="#00ffb3";
    document.getElementById("fortyone").style.backgroundColor="#00ffb3";
    document.getElementById("fortytwo").style.backgroundColor="#00ffb3";
    document.getElementById("fortythree").style.backgroundColor="#00ffb3";
    document.getElementById("fortyfour").style.backgroundColor="#00ffb3";
    document.getElementById("fortyfive").style.backgroundColor="#00ffb3";
    document.getElementById("fortysix").style.backgroundColor="#ff9100";
    document.getElementById("fortyseven").style.backgroundColor="#ff9100";
    document.getElementById("fortyeight").style.backgroundColor="#ff9100";
    document.getElementById("fortynine").style.backgroundColor="#ff9100";
    document.getElementById("fifty").style.backgroundColor="#ff9100";
    document.getElementById("fiftyone").style.backgroundColor="#ff9100";
    document.getElementById("fiftytwo").style.backgroundColor="#ff9100";
    document.getElementById("fiftythree").style.backgroundColor="#ff9100";
    document.getElementById("fiftyfour").style.backgroundColor="#ff9100";
    document.getElementById("fiftyfive").style.backgroundColor="#ff44b7";
    document.getElementById("fiftysix").style.backgroundColor="#ff44b7";
    document.getElementById("fiftyseven").style.backgroundColor="#ff44b7";
    document.getElementById("fiftyeight").style.backgroundColor="#ff44b7";
    document.getElementById("fiftynine").style.backgroundColor="#ff44b7";
    document.getElementById("sixty").style.backgroundColor="#ff44b7";
    document.getElementById("sixtyone").style.backgroundColor="#ff44b7";
    document.getElementById("sixtytwo").style.backgroundColor="#ff44b7";
    document.getElementById("sixtythree").style.backgroundColor="#ff44b7";
    document.getElementById("sixtyfour").style.backgroundColor="#833d0f";
    document.getElementById("sixtyfive").style.backgroundColor="#833d0f";
    document.getElementById("sixtysix").style.backgroundColor="#833d0f";
    document.getElementById("sixtyseven").style.backgroundColor="#833d0f";
    document.getElementById("sixtyeight").style.backgroundColor="#833d0f";
    document.getElementById("sixtynine").style.backgroundColor="#833d0f";
    document.getElementById("seventy").style.backgroundColor="#833d0f";
    document.getElementById("seventyone").style.backgroundColor="#833d0f";
    document.getElementById("seventytwo").style.backgroundColor="#833d0f";
    document.getElementById("seventythree").style.backgroundColor="#ffffff";
    document.getElementById("seventyfour").style.backgroundColor="#ffffff";
    document.getElementById("seventyfive").style.backgroundColor="#ffffff";
    document.getElementById("seventysix").style.backgroundColor="#ffffff";
    document.getElementById("seventyseven").style.backgroundColor="#ffffff";
    document.getElementById("seventyeight").style.backgroundColor="#ffffff";
    document.getElementById("seventynine").style.backgroundColor="#ffffff";
    document.getElementById("eighty").style.backgroundColor="#ffffff";
    document.getElementById("eightyone").style.backgroundColor="#ffffff";

    square = (new Array(9)).fill("e");
    square2 = (new Array(9)).fill("e");
    square3 = (new Array(9)).fill("e");
    square4 = (new Array(9)).fill("e");
    square5 = (new Array(9)).fill("e");
    square6 = (new Array(9)).fill("e");
    square7 = (new Array(9)).fill("e");
    square8 = (new Array(9)).fill("e");
    square9 = (new Array(9)).fill("e");
    square10 = (new Array(9)).fill("e");

    turn = true;
}

function disable()  {
    document.getElementById("one").disabled = true;
    document.getElementById("two").disabled = true;
    document.getElementById("three").disabled = true;
    document.getElementById("four").disabled = true;
    document.getElementById("five").disabled = true;
    document.getElementById("six").disabled = true;
    document.getElementById("seven").disabled = true;
    document.getElementById("eight").disabled = true;
    document.getElementById("nine").disabled = true;
    document.getElementById("ten").disabled = true;
    document.getElementById("eleven").disabled = true;
    document.getElementById("twelve").disabled = true;
    document.getElementById("thirteen").disabled = true;
    document.getElementById("fourteen").disabled = true;
    document.getElementById("fifteen").disabled = true;
    document.getElementById("sixteen").disabled = true;
    document.getElementById("seventeen").disabled = true;
    document.getElementById("eighteen").disabled = true;
    document.getElementById("nineteen").disabled = true;
    document.getElementById("twenty").disabled = true;
    document.getElementById("twentyone").disabled = true;
    document.getElementById("twentytwo").disabled = true;
    document.getElementById("twentythree").disabled = true;
    document.getElementById("twentyfour").disabled = true;
    document.getElementById("twentyfive").disabled = true;
    document.getElementById("twentysix").disabled = true;
    document.getElementById("twentyseven").disabled = true;
    document.getElementById("twentyeight").disabled = true;
    document.getElementById("twentynine").disabled = true;
    document.getElementById("thirty").disabled = true;
    document.getElementById("thirtyone").disabled = true;
    document.getElementById("thirtytwo").disabled = true;
    document.getElementById("thirtythree").disabled = true;
    document.getElementById("thirtyfour").disabled = true;
    document.getElementById("thirtyfive").disabled = true;
    document.getElementById("thirtysix").disabled = true;
    document.getElementById("thirtyseven").disabled = true;
    document.getElementById("thirtyeight").disabled = true;
    document.getElementById("thirtynine").disabled = true;
    document.getElementById("forty").disabled = true;
    document.getElementById("fortyone").disabled = true;
    document.getElementById("fortytwo").disabled = true;
    document.getElementById("fortythree").disabled = true;
    document.getElementById("fortyfour").disabled = true;
    document.getElementById("fortyfive").disabled = true;
    document.getElementById("fortysix").disabled = true;
    document.getElementById("fortyseven").disabled = true;
    document.getElementById("fortyeight").disabled = true;
    document.getElementById("fortynine").disabled = true;
    document.getElementById("fifty").disabled = true;
    document.getElementById("fiftyone").disabled = true;
    document.getElementById("fiftytwo").disabled = true;
    document.getElementById("fiftythree").disabled = true;
    document.getElementById("fiftyfour").disabled = true;
    document.getElementById("fiftyfive").disabled = true;
    document.getElementById("fiftysix").disabled = true;
    document.getElementById("fiftyseven").disabled = true;
    document.getElementById("fiftyeight").disabled = true;
    document.getElementById("fiftynine").disabled = true;
    document.getElementById("sixty").disabled = true;
    document.getElementById("sixtyone").disabled = true;
    document.getElementById("sixtytwo").disabled = true;
    document.getElementById("sixtythree").disabled = true;
    document.getElementById("sixtyfour").disabled = true;
    document.getElementById("sixtyfive").disabled = true;
    document.getElementById("sixtysix").disabled = true;
    document.getElementById("sixtyseven").disabled = true;
    document.getElementById("sixtyeight").disabled = true;
    document.getElementById("sixtynine").disabled = true;
    document.getElementById("seventy").disabled = true;
    document.getElementById("seventyone").disabled = true;
    document.getElementById("seventytwo").disabled = true;
    document.getElementById("seventythree").disabled = true;
    document.getElementById("seventyfour").disabled = true;
    document.getElementById("seventyfive").disabled = true;
    document.getElementById("seventysix").disabled = true;
    document.getElementById("seventyseven").disabled = true;
    document.getElementById("seventyeight").disabled = true;
    document.getElementById("seventynine").disabled = true;
    document.getElementById("eighty").disabled = true;
    document.getElementById("eightyone").disabled = true;
}
//shows images
function show_image(src, width, height, id) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.id = id;
    img.style = "position: absolute; left: 100px; bottom: 50px";
    //  add it to the <body> tag
    document.body.appendChild(img);
}
