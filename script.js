// common function for cost zero
function costZero(convertZero,price){
    const totalMemory =document.getElementById('total-price');
const totalprice =  parseInt(totalMemory.innerText) - price;
    const converZeroPrize = document.getElementById(convertZero);
    converZeroPrize.innerText = 0;
     totalMemory.innerText =totalprice;
     const totaldiscountAmount = document.getElementById('total-price-discount');
     totaldiscountAmount.innerText =  totalMemory.innerText;
}
document.getElementById('convert-zero').addEventListener('click',function(){
      costZero('cost-memory',180);
});

document.getElementById('convert-storage-zero').addEventListener('click',function(){
costZero('extra-storage-cost',100);
});
document.getElementById('choose-convert-zero').addEventListener('click',function(){

costZero('delivery-crg',20);
});

// price calculation 
document.getElementById('second-memory-btn').addEventListener('click',function(){

    const costMemory = document.getElementById('cost-memory');
    costMemory.innerText = "180";
    const bestprice =document.getElementById('best-price');
    const bestpriceNumber = parseInt(bestprice.innerText);
    const costMemoryAmount =document.getElementById('cost-memory');
    const costMemoryNumber = parseInt(costMemoryAmount.innerText);
    const extraCostMemory = document.getElementById('extra-storage-cost');
    const extraCostMemoryNumber = parseInt(extraCostMemory.innerText);
    const deliveryCost = document.getElementById('delivery-crg');
    const deliverycostNumber = parseInt(deliveryCost.innerText);
    const total =document.getElementById('total-price');
    const totalAmount = bestpriceNumber + costMemoryNumber + extraCostMemoryNumber + deliverycostNumber;
 total.innerText = totalAmount;

 const totaldiscountAmount = document.getElementById('total-price-discount');
 totaldiscountAmount.innerText =  totalAmount;


});
document.getElementById('second-storage-btn').addEventListener('click',function(){
    const extraStorageCost = document.getElementById('extra-storage-cost');
     extraStorageCost.innerText = "100";

     const bestprice =document.getElementById('best-price');
     const bestpriceNumber = parseInt(bestprice.innerText);
     const costMemoryAmount =document.getElementById('cost-memory');
     const costMemoryNumber = parseInt(costMemoryAmount.innerText);
     const extraCostMemory = document.getElementById('extra-storage-cost');
     const extraCostMemoryNumber = parseInt(extraCostMemory.innerText);
     const deliveryCost = document.getElementById('delivery-crg');
     const deliverycostNumber = parseInt(deliveryCost.innerText);
     const total =document.getElementById('total-price');
     const totalAmount = bestpriceNumber + costMemoryNumber + extraCostMemoryNumber + deliverycostNumber;
  total.innerText = totalAmount;

  const totaldiscountAmount = document.getElementById('total-price-discount');
  totaldiscountAmount.innerText =  totalAmount;

})

document.getElementById('Third-storage-btn').addEventListener('click',function(){
    const extraStorageCost = document.getElementById('extra-storage-cost');
    extraStorageCost.innerText = "180";

    const bestprice =document.getElementById('best-price');
    const bestpriceNumber = parseInt(bestprice.innerText);
    const costMemoryAmount =document.getElementById('cost-memory');
    const costMemoryNumber = parseInt(costMemoryAmount.innerText);
    const extraCostMemory = document.getElementById('extra-storage-cost');
    const extraCostMemoryNumber = parseInt(extraCostMemory.innerText);
    const deliveryCost = document.getElementById('delivery-crg');
    const deliverycostNumber = parseInt(deliveryCost.innerText);
    const total =document.getElementById('total-price');
    const totalAmount = bestpriceNumber + costMemoryNumber + extraCostMemoryNumber + deliverycostNumber;
 total.innerText = totalAmount;
 const totaldiscountAmount = document.getElementById('total-price-discount');
 totaldiscountAmount.innerText =  totalAmount;
});

document.getElementById('storage-cost-btn').addEventListener('click',function(){
const deliveryCrg = document.getElementById('delivery-crg');
deliveryCrg.innerText = 20;
const bestprice =document.getElementById('best-price');
    const bestpriceNumber = parseInt(bestprice.innerText);
    const costMemoryAmount =document.getElementById('cost-memory');
    const costMemoryNumber = parseInt(costMemoryAmount.innerText);
    const extraCostMemory = document.getElementById('extra-storage-cost');
    const extraCostMemoryNumber = parseInt(extraCostMemory.innerText);
    const deliveryCost = document.getElementById('delivery-crg');
    const deliverycostNumber = parseInt(deliveryCost.innerText);
    const total =document.getElementById('total-price');
    const totalAmount = bestpriceNumber + costMemoryNumber + extraCostMemoryNumber + deliverycostNumber;
 total.innerText = totalAmount;


 const totaldiscountAmount = document.getElementById('total-price-discount');
 totaldiscountAmount.innerText =  totalAmount;

});

// second common function for decrease code
function couponcodeApply(){
    const totaldiscountAmount = document.getElementById('total-price-discount');
      const discount = parseInt(totaldiscountAmount.innerText)/ 20;
const discountTotal =document.getElementById('total-price-discount');
    discountTotal.innerText =parseInt(totaldiscountAmount.innerText) - discount;
}

// discount 
let couponcodeCount = 0;
document.getElementById('button-addon').addEventListener('click',function(){
    const inputField = document.getElementById('input-value');
    const promoCode = inputField.value;
    const errorMsg = document.getElementById('error');
    if(promoCode == "stevekaku"){
        couponcodeCount= couponcodeCount + 1;
        if(couponcodeCount == 1){
            inputField.value ="";
        errorMsg.innerText ="";
      
        couponcodeApply();

      }
  
    }
    else{
        errorMsg.innerText =  "please type a valid promo code";
    }
    });






