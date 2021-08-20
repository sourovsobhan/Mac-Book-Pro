function costZero(convertZero){
    const commonElement = document.getElementById(convertZero);
    commonElement.innerText = 0;
    const totalMemory =document.getElementById('total');
    totalMemory.innerText = 1299;
};
document.getElementById('convert-zero').addEventListener('click',function(){
    costZero('cost-memory');
});
document.getElementById('convert-storage-zero').addEventListener('click',function(){
costZero('extra-cost-memory');
});
document.getElementById('choose-convert-zero').addEventListener('click',function(){
   costZero('delivery-crg');
});

function getCalculate(id,price){
    const element = document.getElementById(id);
    element.innerText=  parseInt(element.innerText) + price;
        const totalMemory =document.getElementById('total');
        const currentTotal = parseInt(element.innerText) + parseInt(totalMemory.innerText);
        totalMemory.innerText = currentTotal;

}
document.getElementById('second-memory-btn').addEventListener('click',function(){
   getCalculate('cost-memory',180);
});

document.getElementById('second-storage-btn').addEventListener('click',function(){
getCalculate('extra-cost-memory',100);
});

document.getElementById('Third-storage-btn').addEventListener('click',function(){
    getCalculate('extra-cost-memory',180);
});

document.getElementById('storage-cost-btn').addEventListener('click',function(){
        getCalculate('delivery-crg',20);
});

document.getElementById('button-addon').addEventListener('click',function(){
const inputField = document.getElementById('input-value');
const promoCode = inputField.value;
const errorMsg = document.getElementById('error');
if(promoCode == "stevekaku"){
    const totalMemory =document.getElementById('total');
errorMsg.innerText ="";
    const discount = parseInt(totalMemory.innerText)/ 20;

    const discountTotal =document.getElementById('discount-total');
    discountTotal.innerText =parseInt(totalMemory.innerText) - discount;

}
else{
    errorMsg.innerText =  "please type a valid promo code";
}
})
