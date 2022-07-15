const counters=document.querySelectorAll(".buttonsDiv");
let productsArray=[];
productArrayBuilder();
function productArrayBuilder()
{
    for (let i = 0; i < counters.length; i++) {
        productsArray.push(0); 
    }
}
buildLogic();
function buildLogic()
{
    for (let i = 0; i < productsArray.length; i++) {
        const object = counters[i].children;
        object[0].addEventListener("click",function()
        {
            if(productsArray[i]-1!=-1)
            {
                productsArray[i]-=1;
                object[1].innerText=productsArray[i];
                object[1].classList.remove("animate__bounceIn");
                setTimeout(function () {
                object[1].classList.add("animate__bounceIn");
            }, 1);
            }
        });

        object[2].addEventListener("click",function()
        {
            productsArray[i]+=1;
            object[1].innerText=productsArray[i];
            object[1].classList.remove("animate__bounceIn");
                setTimeout(function () {
                object[1].classList.add("animate__bounceIn");
            }, 1);
        });
        
    }
}
