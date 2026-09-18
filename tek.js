function getData() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET",
        "https://webapps.tekstac.com/WebAPI/CreditCardsXMLServlet",
        true);

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {

            var xml = xhr.responseXML;
            var cards = [];

            var cardNodes = xml.getElementsByTagName("card");

            for (var i = 0; i < cardNodes.length; i++) {

                var card = cardNodes[i];

                var cardHolderName =
                    card.getElementsByTagName("cardHolderName")[0].textContent;

                var cardType =
                    card.getElementsByTagName("cardType")[0].textContent;

                var cardLimit =
                    card.getElementsByTagName("cardLimit")[0].textContent;

                var expiryDate =
                    card.getElementsByTagName("expiryDate")[0].textContent;

                cards.push({
                    cardHolderName: cardHolderName,
                    cardType: cardType,
                    cardLimit: cardLimit,
                    expiryDate: expiryDate
                });
            }

            document.getElementById("message").innerHTML =
                "Data retrieved successfully.";

            displayData(cards);
        }
    };

    xhr.send();
}


function displayData(cards) {

    var table = "<table border='1'>";

    table += "<tr>";
    table += "<th>Card Holder Name</th>";
    table += "<th>Card Type</th>";
    table += "<th>Card Limit</th>";
    table += "<th>Expiry Date</th>";
    table += "</tr>";

    for (var i = 0; i < cards.length; i++) {

        table += "<tr>";

        table += "<td>" + cards[i].cardHolderName + "</td>";
        table += "<td>" + cards[i].cardType + "</td>";
        table += "<td>" + cards[i].cardLimit + "</td>";
        table += "<td>" + cards[i].expiryDate + "</td>";

        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("result").innerHTML = table;

    document.getElementById("report").innerHTML =
        "Report generated successfully!!!";
}