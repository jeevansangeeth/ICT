var productPrices = {
    1: 30000,
    2: 50000,
    3: 20000,
  };

  function calculateBagTotal() {
    var product = document.getElementById("product").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    var paymentMode = document.getElementById("mode").value;

    let bagTotal = productPrices[product] * quantity;

    if (paymentMode === "2") {
      bagTotal -= (bagTotal * 5) / 100;
    }

    document.getElementById("bill").value = bagTotal.toFixed(2);
  }

  function calculateCoupon() {
    var bagTotal = parseFloat(document.getElementById("bill").value);
    let couponCode = "ADI";
    if (bagTotal >= 100000) {
      couponCode += bagTotal.toFixed(0).slice(0, 4);
    } else {
      couponCode += "0000";
    }
    document.getElementById("coupon").value = couponCode;
  }

  function calculateFinalAmount(event) {
    event.preventDefault();
    var bagTotal = parseFloat(document.getElementById("bill").value);
    var couponDigits = parseInt(
      document.getElementById("coupon").value.substring(3)
    );
    var deliveryOption = document.querySelector(
      'input[name="delivery"]:checked'
    ).value;
    let deliveryCharge = 0;

    if (deliveryOption === "Express") {
      deliveryCharge = 500;
    }

    var finalAmount = bagTotal - couponDigits + deliveryCharge;

    var customerName = document.getElementById("custname").value;
    var email = document.getElementById("email").value;

    var resultMessage = `Dear ${customerName}, \nYour Final bill is Rs: ${finalAmount}/-,\n Product will be delivered in next ${
      deliveryOption === "Express" ? "24" : "72"
    } hrs.\nInvoice Copy is mailed on: ${email}`;

    document.getElementById("result").innerHTML = resultMessage;
    return false;
  }

  function disableSubmit() {
    document.getElementById("submit").disabled = true;
  }

  function activateButton(checkbox) {
    if (checkbox.checked) {
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("submit").disabled = true;
    }
  }