const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
  let handler = PaystackPop.setup({
    key: "pk_live_0e93b8f015a4fff06a7150a20430267a306b974a", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    firstname: document.getElementById("first-name").value,
    lastname: document.getElementById("last-name").value,
    //  ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      // alert("Window closed.");
    },
    callback: function (response) {
      document.getElementById("success-donate").style.display = "block";
      document.getElementById("email-address").value = "";
      document.getElementById("amount").value = "";
      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      //   let message = "Payment complete! Reference: " + response.reference;
      //   alert(message);
    },
  });
  handler.openIframe();
}
