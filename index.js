// let total = 0;
// function handleClick(target) {
//   const selectedItems = document.getElementById("store-item");
//   const count = selectedItems.childElementCount;
//   const item = target.childNodes[3].childNodes[3];
//   const itemValue = item.innerText;
//   const p = document.createElement("p");
//   p.innerHTML = `
//   ${count + 1}. ${itemValue}
//   `;
//   selectedItems.appendChild(p);

//   // const price = target.childNodes[3].childNodes[3].innerText.split(" ")[0];
//   const price = target.childNodes[3]
//   console.log(price);
//   const totalPrice = document.getElementById("total-price");
//   total = parseInt(total) + parseInt(price);
//   totalPrice.innerText = total.toFixed(2);

//   //   const applyBtn = document.getElementById("apply-btn");
//   //   if (total >= 200) {
//   //     applyBtn.removeAttribute("disabled");
//   //   } else {
//   //     applyBtn.setAttribute("disabled", true)
//   //   }

//   // const makePurchase = document.getElementById("makePurchase")
//   //   if(total > 0){
//   //     makePurchase.removeAttribute("disabled")
//   //   }else{
//   //     makePurchase.setAttribute("disabled", true)
//   //   }
// }

// function applyButton() {
//   const couponBtn = document.getElementById("coupon-btn");
//   const couponBtnText = couponBtn.innerText;

//   const couponField = document.getElementById("coupon-field");
//   const couponFieldValue = couponField.value;
//   if (couponBtnText === couponFieldValue) {
//     const totalPriceElement = document.getElementById("total-price");
//     const totalPriceString = totalPriceElement.innerText;
//     const totalPrice = parseFloat(totalPriceString);
//     const discountElement = document.getElementById("discount");
//     discountElement.innerText = (totalPrice * 0.2).toFixed(2);

//     const discountCode = document.getElementById("discount");
//     const discountString = discountCode.innerText;
//     const discount = parseFloat(discountString);

//     const total = document.getElementById("grandTotal");
//     total.innerText = (totalPrice - discount).toFixed(2);
//   }
// }

// // function makePurchase() {
// //   console.log("make clicked");
// // }

// function modalClose() {
//   location.reload();
// }






let total = 0;
function handleClick(target) {
  const selectedContainer = document.getElementById("selected-container");
  const count = selectedContainer.childElementCount;
  const item = target.childNodes[3].childNodes[3];
  const itemValue = item.innerText;
  const p = document.createElement("p");
  p.innerHTML = `
  ${count + 1}. ${itemValue}
  `;
  selectedContainer.appendChild(p);

  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  const totalPrice = document.getElementById("total-price");
  total = parseInt(total) + parseInt(price);
  totalPrice.innerText = total.toFixed(2);

  const applyButton = document.getElementById("apply-button");
  if (total >= 200) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true)
  }

const purchase = document.getElementById("purchase")
  if(total > 0){
    purchase.removeAttribute("disabled")
  }else{
    purchase.setAttribute("disabled", true)
  }

}


function applyButton() {
  const couponButton = document.getElementById("coupon-button")
  const couponBtnText  =  couponButton.innerText

  const couponField = document.getElementById("coupon-field")
  const couponFieldValue = couponField.value
  if(couponBtnText === couponFieldValue){
    const totalPriceElement = document.getElementById("total-price");
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const discountElement = document.getElementById("discount");
    discountElement.innerText = (totalPrice * 0.2).toFixed(2);
  
    const discountNumber = document.getElementById("discount");
    const discountText = discountNumber.innerText;
    const discount = parseFloat(discountText);
  
    const total = document.getElementById("grandTotal");
    total.innerText = (totalPrice - discount).toFixed(2);

  }

}

// function makePurchase() {
//   console.log("make clicked");
// }


function modalClose(){
  location.reload()
}
