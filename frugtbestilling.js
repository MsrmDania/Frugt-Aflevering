    var FrugtArray = [];
    var antalFrugt, prisIalt, apple, pear, banana, orange, kiwi, mango;
    apple = 0;
    pear = 0;
    banana = 0;
    orange = 0;
    kiwi = 0;
    mango = 0;

    function addFruit(fruit) {
        var fruit;
        if (fruit === 'parApple') {
            apple++;
            FrugtArray[0] = apple;
            document.getElementById("appleholder").innerHTML = "Antal æbler: " + (apple);
        }
        if (fruit === 'parPear') {
            pear++;
            FrugtArray[1] = pear;
            document.getElementById("pearholder").innerHTML = "Antal pærer: " + (pear);
        }
        if (fruit === 'parBanana') {
            banana++;
            FrugtArray[2] = banana;
            document.getElementById("bananaholder").innerHTML = "Antal bananer: " + (banana);
        }
        if (fruit === 'parOrange') {
            orange++;
            FrugtArray[3] = orange;
            document.getElementById("orangeholder").innerHTML = "Antal appelsiner: " + (orange);
        }
        if (fruit === 'parKiwi') {
            kiwi++;
            FrugtArray[4] = kiwi;
            document.getElementById("kiwiholder").innerHTML = "Antal kiwier: " + (kiwi);
        }
        if (fruit === 'parMango') {
            mango++;
            FrugtArray[5] = mango;
            document.getElementById("mangoholder").innerHTML = "Antal mangoer: " + (mango);
        }

        var sum = FrugtArray.reduce(add, 0);

        function add(a, b) {
            return a + b;
        }

        document.getElementById("placeholderIalt").innerHTML = "Antal frugter i alt: " + (sum) + " stk.";
        
        document.getElementById("placeholderPris").innerHTML = "Pris i alt: " + (sum) * 4 + " kr.";
        

    }
