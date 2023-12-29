let navPopup = document.querySelector('.popup');
let cartIcon = document.querySelector('#shop-icon');
let cartBox = document.querySelector('.cart-box');
let cartList = document.querySelector('.cart-list');
let mainImg = document.querySelector('.mainImg-sec img');
let thumbNails = document.querySelectorAll('.thumbnail');
let quantNumInfo = document.querySelector('.cart-quant');
let plusIcon = document.querySelector('.plus');
let minusIcon = document.querySelector('.minus');
let addtoCartBtn = document.querySelector('.addtocart-btn');
//CartBox Section
cartIcon.addEventListener('click',()=>{
 cartBox.classList.toggle('cartboxActive');
}) 

//Thumnails Section
thumbNails.forEach((thumbnail)=>{
  thumbnail.addEventListener('click',(e)=>{
    console.log(e.target);
    thumbNails.forEach((img)=>{
      img.classList.remove('selected')
    })
    mainImg.src = thumbnail.src; 
    thumbnail.classList.add('selected');
  })
})
//Adding Quantity Section...
let quantNum = 1;
minusIcon.addEventListener('click',()=>{
  if(quantNum == 1){
    return false;
  }
  else{
    quantNum--;
  }
  quantNumInfo.innerHTML = quantNum;
})
plusIcon.addEventListener('click',()=>{
  quantNum++;
  quantNumInfo.innerHTML = quantNum;
})

//Add to Cart Button functionalityyyy
addtoCartBtn?.addEventListener('click',()=>{
  console.log('clicked');
  cartList.innerHTML = `<div class="item">
                          <div class="item-info">
                            <img src="images/image-product-1-thumbnail.jpg" alt="">
                            <div class="item-desc">
                              <p>Fall Limited Edition Sneakers</p>
                              <p>$125.00 * ${quantNum} <span class="total-amount">$${125 * (quantNum)}.00</span></p>
                            </div>
                            <div class="bin" onclick='deleteItem()'>
                              <i class="fa-solid fa-trash"></i>
                            </div>
                          </div>
                          <button>Checkout</button>
                        </div>`;
  navPopup.style.opacity = '1';
  navPopup.style.transform = 'translateY(10px)';
  setTimeout(()=>{
    if(navPopup.style.opacity = '1'){
      navPopup.style.opacity = 0;
      navPopup.style.transform = 'translateY(0px)';
    }
  },2000)    


  //Delete the Cart Item
  let cartItem = document.querySelector('.item')
  let Bin = document.querySelector('.bin')
  Bin?.addEventListener('click',()=>{
    cartItem?.remove();
    console.log(cartList.length);
    cartList.innerHTML = `<h5>Your cart is Empty...`;
  })                   
})





