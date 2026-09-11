
let isUserActive = true;
let hasOrderCompleted = false;
let isEmailVerified = true;
let isAccountLocked = false;
let userLoginStatus = "loggedIn";
let currentUserRole = "customer";


let totalCartAmount = 2500;
let isPaymentSuccess = false;
let totalOrderCount = 5;
let isCartEmpty = totalCartAmount === 0;


let isDarkModeEnabled = true;
let isDataLoading = false;
let currentPageNumber = 1;
let userNotificationCount
function checkoutOrder() {
  if (!isUserActive) {
    console.log("User is not active. Cannot proceed.");
    return;
  }

  if (isAccountLocked) {
    console.log("Account is locked. Checkout blocked.");
    return;
  }

  if (isCartEmpty) {
    console.log("Cart is empty. Add items first.");
    return;
  }

  if (!isEmailVerified) {
    console.log("Please verify your email before checkout.");
    return;
  }


  isPaymentSuccess = true;
  hasOrderCompleted = isPaymentSuccess;
  totalOrderCount++;

  console.log(`Order placed successfully!`);
  console.log(`Total Amount Paid: ₹${totalCartAmount}`);
  console.log(`Total Orders So Far: ${totalOrderCount}`);
}


console.log("User Login Status:", userLoginStatus);
console.log("Current User Role:", currentUserRole);
console.log("Dark Mode Enabled:", isDarkModeEnabled);
console.log("Notifications:", userNotificationCount);

checkoutOrder();
