"use strict";

window.addEventListener("load", function () {
  var button = document.querySelector("#button");
  var final_value = document.querySelector("#final-value");

  button.addEventListener("click", function () {
    // Valores a recibir

    var option_badge = document.querySelector("#badge").value;
    var option_to_badge = document.querySelector("#to_badge").value;
    var amount = parseInt(document.querySelector("#amount").value);

    // Debido a que se requiere hacer un pago para poder cambiar la divisa a la cual se desea hacer el cambio,
    // se tuvieron que usar valores estaticos para hacer el cambio del euro al peso y viceversa.

    fetch("assets/data.json")
      .then((Response) => Response.json())
      .then((data) => {
        var valueBTC = data.quotes.BTC;
        var valueETH = data.quotes.ETH;
        var valueFTM = data.quotes.FTM;
        var valueSOL = data.quotes.SOL;
        var valueMATIC = data.quotes.MATIC;
        var valueUNI = data.quotes.UNI;
        var valueDAI = data.quotes.DAI;
        var valueTRX = data.quotes.TRX;
        var valueUSDT = data.quotes.USDT;
        var valueDOGE = data.quotes.DOGE;

        var result;

        switch (option_badge) {
          case "BTC":
            switch (option_to_badge) {
              case "BTC":
                result = amount;
                break;
              case "ETH":
                result = (amount * 18.13055971).toFixed(2);
                break;
              case "USDT":
                result = (amount * 36850).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 461374.73394).toFixed(2);
                break;
              case "TRX":
                result = (amount * 351957.9751).toFixed(2);
                break;
              case "DAI":
                result = (amount * 37222.8036).toFixed(2);
                break;
              case "UNI":
                result = (amount * 5865.0326).toFixed(2);
                break;
              case "SOL":
                result = (amount * 668.056627).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 49317.4518).toFixed(2);
                break;
              case "FTM":
                result = (amount * 122343.9575).toFixed(2);
                break;
            }
            break;

          case "ETH":
            switch (option_to_badge) {
              case "ETH":
                result = amount;
                break;
              case "BTC":
                result = (amount * 0.54567206).toFixed(2);
                break;
              case "USDT":
                result = (amount * 2015.25093).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 25879.5027).toFixed(2);
                break;
              case "TRX":
                result = (amount * 19407.1791).toFixed(2);
                break;
              case "DAI":
                result = (amount * 2025.7567).toFixed(2);
                break;
              case "UNI":
                result = (amount * 327.64723).toFixed(2);
                break;
              case "SOL":
                result = (amount * 36.959).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 2721.2676).toFixed(2);
                break;
              case "FTM":
                result = (amount * 6812.2949).toFixed(2);
                break;
            }
            break;

          case "USDT":
            switch (option_to_badge) {
              case "USDT":
                result = amount;
                break;
              case "ETH":
                result = (amount * 4.962).toFixed(2);
                break;
              case "BTC":
                result = (amount / 2.70777).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 12.8418).toFixed(2);
                break;
              case "TRX":
                result = (amount * 9.63015).toFixed(2);
                break;
              case "DAI":
                result = (amount * 1.0052).toFixed(2);
                break;
              case "UNI":
                result = (amount * 0.162583).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.0183399).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 1.35033).toFixed(2);
                break;
              case "FTM":
                result = (amount * 3.38037).toFixed(2);
                break;
            }
            break;

          case "DOGE":
            switch (option_to_badge) {
              case "DOGE":
                result = amount;
                break;
              case "ETH":
                result = (amount * 3.86406).toFixed(2);
                break;
              case "USDT":
                result = (amount * 0.0778).toFixed(2);
                break;

              case "BTC":
                result = (amount / 2.1028).toFixed(2);
                break;
              case "TRX":
                result = (amount * 0.749901).toFixed(2);
                break;
              case "DAI":
                result = (amount * 0.07828).toFixed(2);
                break;
              case "UNI":
                result = (amount * 0.012664).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.001428).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 0.105151).toFixed(2);
                break;
              case "FTM":
                result = (amount * 0.263231).toFixed(2);
                break;
            }
            break;

          case "TRX":
            switch (option_to_badge) {
              case "TRX":
                result = amount;
                break;
              case "ETH":
                result = (amount * 5.15273).toFixed(2);
                break;
              case "USDT":
                result = (amount * 0.10384).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 31.335).toFixed(2);
                break;
              case "BTC":
                result = (amount * 2.811702).toFixed(2);
                break;
              case "DAI":
                result = (amount * 0.10438).toFixed(2);
                break;
              case "UNI":
                result = (amount * 0.0168827).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.0019044).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 0.14121).toFixed(2);
                break;
              case "FTM":
                result = (amount * 35.24).toFixed(2);
                break;
            }
            break;

          case "DAI":
            switch (option_to_badge) {
              case "DAI":
                result = amount;
                break;
              case "ETH":
                result = (amount * 4.936).toFixed(2);
                break;
              case "USDT":
                result = (amount * 0.9948).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 12.7752).toFixed(2);
                break;
              case "TRX":
                result = (amount * 9.5802).toFixed(2);
                break;
              case "BTC":
                result = (amount * 2.6936).toFixed(2);
                break;
              case "UNI":
                result = (amount * 0.16174).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.01824).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 1.343333).toFixed(2);
                break;
              case "FTM":
                result = (amount * 3.3628).toFixed(2);
                break;
            }
            break;

          case "UNI":
            switch (option_to_badge) {
              case "UNI":
                result = amount;
                break;
              case "ETH":
                result = (amount * 0.00353).toFixed(2);
                break;
              case "USDT":
                result = (amount * 6.15067).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 78.98).toFixed(2);
                break;
              case "TRX":
                result = (amount * 59.231).toFixed(2);
                break;
              case "DAI":
                result = (amount * 6.1827).toFixed(2);
                break;
              case "BTC":
                result = (amount / 1.6654).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.1128).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 8.305).toFixed(2);
                break;
              case "FTM":
                result = (amount * 20.791).toFixed(2);
                break;
            }
            break;

          case "SOL":
            switch (option_to_badge) {
              case "SOL":
                result = amount;
                break;
              case "ETH":
                result = (amount * 0.02705).toFixed(2);
                break;
              case "USDT":
                result = (amount * 54.52).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 700.209).toFixed(2);
                break;
              case "TRX":
                result = (amount * 525.0911).toFixed(2);
                break;
              case "DAI":
                result = (amount * 54.8099).toFixed(2);
                break;
              case "UNI":
                result = (amount * 8.856).toFixed(2);
                break;
              case "BTC":
                result = (amount * 0.0014764).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 73.62).toFixed(2);
                break;
              case "FTM":
                result = (amount * 184.31).toFixed(2);
                break;
            }
            break;

          case "MATIC":
            switch (option_to_badge) {
              case "MATIC":
                result = amount;
                break;
              case "ETH":
                result = (amount * 3.674).toFixed(2);
                break;
              case "USDT":
                result = (amount * 0.7405).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 3774.6).toFixed(2);
                break;
              case "TRX":
                result = (amount * 7.131).toFixed(2);
                break;
              case "DAI":
                result = (amount * 0.7444).toFixed(2);
                break;
              case "UNI":
                result = (amount * 0.1204).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.013581).toFixed(2);
                break;
              case "BTC":
                result = (amount * 2.0052).toFixed(2);
                break;
              case "FTM":
                result = (amount * 2.503).toFixed(2);
                break;
            }
            break;

          case "FTM":
            switch (option_to_badge) {
              case "FTM":
                result = amount;
                break;
              case "ETH":
                result = (amount * 1.4679).toFixed(2);
                break;
              case "USDT":
                result = (amount * 0.2958).toFixed(2);
                break;

              case "DOGE":
                result = (amount * 3.7989).toFixed(2);
                break;
              case "TRX":
                result = (amount * 2.8488).toFixed(2);
                break;
              case "DAI":
                result = (amount * 0.2973).toFixed(2);
                break;
              case "UNI":
                result = (amount * 0.04809).toFixed(2);
                break;
              case "SOL":
                result = (amount * 0.005425).toFixed(2);
                break;
              case "MATIC":
                result = (amount * 0.39946).toFixed(2);
                break;
              case "BTC":
                result = (amount * 8.0101).toFixed(2);
                break;
            }
            break;
        }

        final_value.value = result;
      });
  });
});
