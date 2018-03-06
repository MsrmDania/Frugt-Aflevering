    var FrugtArray = []; //Array indeholder var fruit nedenfor, f.eks. via FrugtArray[0]
    var antalFrugt, prisIalt, apple, pear, banana, orange, kiwi, mango;
    apple = 0;
    pear = 0;
    banana = 0;
    orange = 0;
    kiwi = 0;
    mango = 0;

    function addFruit(fruit) {
        var fruit; //var fruit omtaler hvilke enheder som findes i function addFruit(fruit)
        if (fruit === 'parApple') { //'parApple' er parametre, som findes inde i HTML
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

        var sum = FrugtArray.reduce(add, 0); //Udregning af totale antal af frugt

        function add(a, b) { // Returnere værdien af a og b til udregningen
            return a + b;
        }

        document.getElementById("placeholderIalt").innerHTML = "Antal frugter i alt: " + (sum) + " stk.";
        
        document.getElementById("placeholderPris").innerHTML = "Pris i alt: " + (sum) * 4 + " kr.";
        //Outputtet på siden er vist ovenfor, ved udregning af pris ganges antallet af frugter med 4.

    }
