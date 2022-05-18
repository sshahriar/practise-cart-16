
let total_cnt =     [ 5, 5, 5, 5, 5, 5, 5 , 5, 5, 5 ] ; 
let cart_cnt = [ 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0] ; 
let item_cost = [0 ,1000 ,1100, 1000,1100, 1000,100  ] ; 
let item_name =["ads" , "Razer Blade", "Dell Alienware", "Asus tuf" ,"HP Victus" , "iphone 5"] ;

let cartwin = document.querySelector('.cart-icon');
let whole_cart_window = document.querySelector('.whole-cart-window');
 

cartwin.addEventListener('click' ,()=>{
    whole_cart_window.classList.toggle('hide') ;
    console.log('inside' ) ;

})

///////////////////////////////////////////////////
 
 



//  click button  

let btn = document.querySelectorAll('.mainBtn') ;
let mbtn = document.querySelectorAll('.minusBtn') ;
let pbtn = document.querySelectorAll('.plusBtn') ;


for(let i = 0;i < btn.length  ; i++ ) {
    let x =  btn[i] ;

    btn[i].addEventListener('click', ()=>{
        // btn[i].innerText = 1;  
 
        // update 0
        let prod_id=  btn[i].parentElement.parentElement.getAttribute('id')    ;
        if(cart_cnt[prod_id] == 0 )cart_cnt[prod_id]++ ; 
        console.log( "prod id->  " , prod_id ,cart_cnt[prod_id]) ;  ; 


        let prodQuant = btn[i].parentElement.previousElementSibling   ; 
        let prodQuant1 = prodQuant.getElementsByClassName('quantity-s')[0]    ;
        console.log(prodQuant1.innerText ) ;
        if(cart_cnt[prod_id] == 1  ) {
            x.innerText = 1 ;
            pbtn[i].style.display = 'inline-block' ;
            mbtn[i].style.display = 'inline-block' ;
            
            let  str = total_cnt[prod_id]-cart_cnt[prod_id] ;
    
            prodQuant1.innerText  = str ;
            updateCart(prod_id)   ;
           
            // _refresh()  ; 
        }
    })   
    
    mbtn[i].addEventListener('click', ()=>{
        console.log( "inside pbtn "  ) ;
        id =  btn[i].parentElement.parentElement.getAttribute('id') ; 
        console.log("id " , id)  ; 
        if(cart_cnt[id]-1 >=0)  {
            cart_cnt[id]-- ;
            mbtnClicked(id ) ;   
            removeTotal(id) ;
            removeSubtotal(id ) ;

            let  par_div = get_div_cart(id)  ; 
            if(par_div == -1  ) return  ; 
            console.log("inside pbtn" , par_div) ; 
            delItemCart( par_div  , id   ) ; 
        
        } else {
 

        }
        
    })   

    pbtn[i].addEventListener('click', ()=>{
        
        console.log( "inside pbtn "  ) ;
        id =  btn[i].parentElement.parentElement.getAttribute('id') ; 
        console.log("id " , id , )  ; 
        if( cart_cnt[id]+ 1 <= total_cnt[id ] ) {
            cart_cnt[id ] ++  ;
            addTotal(id) ;
            addSubtotal(id) ;


            pbtnClicked(id ) ;   
            let  par_div = get_div_cart(id)  ; 
            if(par_div == -1  ) return  ; 
            console.log("inside pbtn" , par_div) ; 
            addItemCart( par_div  , id   ) ; 
        
            
        }
        
        // add in cart  
    })   

}
function get_div_main(id) {
    let _container = document.querySelector('.container' ) ; 
 
    _container  = _container.childNodes  ; 

    for(let i=1; i< _container.length  ;i+=2 ) {
        if(_container[i].getAttribute('id') == id ) {
            console.log("paisi ")  ;
            return _container[i] ; 
        }
    }
    return -1 ; 
}

function pbtnClicked( id ) {
    // add to cart 
    // remove from avail
    // id =  _btn.parentElement.parentElement.getAttribute('id') ; 
    let par_elem = get_div_main(id )  ;
    par_elem = par_elem.childNodes[11]  ;
 
    // console.log( par_elem.childNodes  ) ;
    _btn  = par_elem.childNodes[3] ;
    _pbtn = par_elem.childNodes[5] ;
    _mbtn = par_elem.childNodes[1] ;
  
    console.log("cart cnt -> " , cart_cnt[id]) ;

    // if( 1 + parseInt(_btn.innerText) > 5  ) return  ;  
    // if( cart_cnt[id]+ 1 > total_cnt[id]  ) return  ;  
    
    // cart_cnt[id]++ ;
    let prodQuant = _btn.parentElement.previousElementSibling   ; 
    let prodQuant1 = prodQuant.getElementsByClassName('quantity-s')[0]    ;
    console.log(prodQuant1.innerText ) ;
 
    let  str = total_cnt[id]-cart_cnt[id] ;
    
    prodQuant1.innerText  = str ;


    console.log("inside pbtn " , id  ) ; 

    _btn.innerText = cart_cnt[id]   ;
    _mbtn.style.display = 'inline-block' ;
    _pbtn.style.display = 'inline-block' ;


    //add in cart 
   
}
function mbtnClicked( id ) {
    // remove to cart 
    // add from avail 
    let par_elem = get_div_main(id )  ;
    par_elem = par_elem.childNodes[11]  ;
 
    console.log( par_elem.childNodes  ) ;
    _btn  = par_elem.childNodes[3] ;
    _pbtn = par_elem.childNodes[5] ;
    _mbtn = par_elem.childNodes[1] ;
     
    
    let prodQuant = _btn.parentElement.previousElementSibling   ; 
    let prodQuant1 = prodQuant.getElementsByClassName('quantity-s')[0]    ;
   
    console.log("inner text " , prodQuant1.innerText ) ;
    
    // cart_cnt[id]-- ; 

    let  str = total_cnt[id]-cart_cnt[id]  ;
    prodQuant1.innerText  = str ;

    
    if( cart_cnt[id] <= 0  ) {
   
        _btn.innerText = 'Add to cart';
  
        _pbtn.style.display = 'none' ; 
        _mbtn.style.display = 'none' ;
        remove_from_cart(id ) ; 
    } else {
        _btn.innerText = cart_cnt[id] ;
        _pbtn.style.display = 'inline-block' ; 
        _mbtn.style.display = 'inline-block' ;
    
    }

}





/////////////// cart part ///////////////


// let cartwin = document.querySelector('.cart-icon');
// let whole_cart_window = document.querySelector('.whole-cart-window');



// console.log( total_cnt) ; 
// console.log( item_cnt_cart) ; 
// console.log( item_cost ) ; 



// cartwin.addEventListener('click' ,()=>{
//     whole_cart_window.classList.toggle('hide') ;
//     console.log('inside' ) ;

// })














//////////////////////////////////////////
// if cnt= 0 
function updateCart( id ){
    console.log('inside ' , id  ) ; 
    let cartWrapper = document.querySelector('.cart-wrapper') ;
    let cartItem =  document.createElement('div' )  ; 

    // cartWrapper.innerHTML  = "" ;
    cartItem.classList.add('cart-item' ) ;
    cartItem.id = id ; 
    
    
    let sub_tot = cart_cnt[id ] * item_cost[id ] ; 


    console.log("tot " ,sub_tot , cart_cnt[id]  , item_cost[id]  )  ; 

    cartItem.innerHTML =  `
        <img src="images/${id}.jpg">
        <div class="details">
            <h4>${item_name[id]}</h4>
           
            <!-- <span class="quantity"> quantity: 1 </span>   -->
            <div class="card-btn-cart" >
                <button class="minusBtnc">-</button>
                <span class="cartQuantity">1</span>
                <button class="plusBtnc">+</button>
            
            </div>            
            <span class="price">Subtotal: $${sub_tot} </span>  
        
        </div> 
        <button class="cancel">x </button>
    
    `

    cartWrapper.append( cartItem)   ;

    let mbtnc =  cartItem.childNodes[3].childNodes[5].childNodes[1] ;
    let pbtnc =  cartItem.childNodes[3].childNodes[5].childNodes[5] ;
    
    mbtnc.addEventListener('click' , cartMinusEvent) ;
    pbtnc.addEventListener('click' , cartPlusEvent ) ;
    
    
    addTotal(id ) ;
    addCount() ;
    // addSubtotal(id) ;

    console.log( "add-----------------------------------") ;
    console.log(cartItem.parentElement.childNodes[1].childNodes);
    
    addCrossEvent(id) ;
    console.log( "-----------------------------------ed") ;
    

}
function addCrossEvent(id ){
    // console.log("adding cross eev"  ) ;
    let divs=  document.querySelectorAll('.cart-item' ) ;
    let _button   ;
    for(let i = 0 ;i< divs.length ;i++  ) {
        if(divs[i].getAttribute('id') == id ) {
            _button = divs[i] ; 
            break ; 
        }   
    }
    _button  = _button.childNodes[5];
    // console.log(_button)  ;
    _button.addEventListener('click' , removeItemFromCart) ;
} 
function removeItemFromCart(e) {

    // console.log("x clicked"  ) ;
    // console.log(e.target.parentElement) ;
    let par_elem = e.target.parentElement ; 
    let id = par_elem.getAttribute('id') ;
    let cost = cart_cnt[id]* item_cost[id] ;
    // console.log(id , cost) ;
    // console.log(par_elem) ;
    // par_elem.remove() ;

    // adjust total 
    let total = document.querySelector('.checkout') ;
    let val = total.innerText.replace('Total: $','') ;
    val = val- cost;
    console.log(val) ;
    total.innerText  = 'Total: $'+ val ;
    // adjust cart 
    while(cart_cnt[id] ){
        console.log("inside " ) ;
        cart_cnt[id]--;
        mbtnClicked(id) ; 
       
    }



}
function addTotal(id ){

    let tot =  document.querySelector('.checkout') ;
    let tot_price =  tot.innerText ;
    tot_price = tot_price.replace('Total: $','') ;
    tot_price =  item_cost[id] +  parseInt(tot_price) ; 
    tot.innerHTML =  "Total: $"+tot_price ; 

}
function removeTotal(id ){
    let tot =  document.querySelector('.checkout') ;
    let tot_price =  tot.innerText ;
    tot_price = tot_price.replace('Total: $','') ;
    tot_price =  -item_cost[id]+  parseInt(tot_price) ; 
    tot.innerHTML =  "Total: $"+tot_price ; 

}
function addSubtotal(id){
    let x =  document.querySelectorAll('.cart-item') ;
    console.log( "addsub " , x ) ;  
    let  prod1 = -1; 
    for(let i= 0 ;i<x.length ; i++   ) {
        
        if(x[i].getAttribute('id') == id  ){

            console.log("---------------------------- ") ;            
            let subTot =x[i].childNodes[3].childNodes[7].innerText ;
            let _div= x[i].childNodes[3].childNodes[7] ;
            subTot =  subTot.replace('Subtotal: $','') ;
            subTot = parseInt(subTot)+ item_cost[id] ;
            _div.innerHTML =  'Subtotal: $' +subTot ;
            console.log(subTot ) ;
            console.log("----------------------------edfdfs ") ;
            break ;

        }
    }
}
function removeSubtotal(id){
    let x =  document.querySelectorAll('.cart-item') ;
    console.log( "addsub " , x ) ;  
    let  prod1 = -1; 
    for(let i= 0 ;i<x.length ; i++   ) {
        
        if(x[i].getAttribute('id') == id  ){

            console.log("---------------------------- ") ;            
            let subTot =x[i].childNodes[3].childNodes[7].innerText ;
            let _div= x[i].childNodes[3].childNodes[7] ;
            subTot =  subTot.replace('Subtotal: $','') ;
            subTot = parseInt(subTot) -  item_cost[id] ;
            _div.innerHTML =  'Subtotal: $' +subTot ;
            console.log(subTot ) ;
            console.log("----------------------------edfdfs ") ;
            break ;

        }
    }
  
}

// updateCart(1); 
// updateCart(2);
// updateCart(3);
// updateCart(4);
// updateCart(5);


///// cart event  

function  cartMinusEvent(e) {
      
    let mbtnc  = e.target ; 
    console.log("inside " ) ; 
    let par_div = mbtnc.parentElement.parentElement.parentElement  ;
    let prod_id = par_div.getAttribute('id')  ;  
    console.log(  mbtnc) ;

    // console.log(  par_div  , prod_id  ) ; 
    console.log("- clilcked "  , cart_cnt[prod_id] ) ; 
    
    if( cart_cnt[prod_id]-1  >= 0  ) {
        cart_cnt[prod_id]-- ; 
        removeTotal(prod_id) ;
        removeSubtotal(prod_id) ;
        delItemCart(par_div , prod_id  )  ;
        mbtnClicked(prod_id) ; 
        
    } 

}
function cartPlusEvent(e)  {
    let pbtnc = e.target ;
    let par_div = pbtnc.parentElement.parentElement.parentElement  ;
    let prod_id = par_div.getAttribute('id')  ; 
    console.log( "par -> " ,  pbtnc) ;
    
    console.log("+ clilcked ", cart_cnt[prod_id]   ) ; 
    console.log(par_div ) ;
    if( cart_cnt[prod_id ]+1 <= total_cnt[prod_id]  ) {
        addTotal(prod_id) ;
        addSubtotal(id) ;

        cart_cnt[prod_id]++ ; 
        addItemCart(par_div ,prod_id  ) ; 
        pbtnClicked( prod_id ) ;
    
    }


}
function addItemCart( par_div  , prod_id   )  {
    // console.log("indide additem " ) ;
    console.log("---------------------------------------") ;
    console.log(cart_cnt[prod_id] ) ;
    
    console.log("---------------------------------------ed") ;
    let x = par_div.childNodes[3].childNodes[5].childNodes[3] ;
    console.log(par_div, x.innerHTML) ;
    
    x.innerHTML  = cart_cnt[prod_id]   ;


}

function delItemCart( par_div  , prod_id )  {
    let x = par_div.childNodes[3].childNodes[5].childNodes[3];
    console.log(par_div) ;
    x.innerHTML  = cart_cnt[prod_id]   ;

}

// returns div of cart id 
function get_div_cart(prod_id)  {

    let x =  document.querySelectorAll('.cart-item') ;
 
    let  prod1 = -1; 
    for(let i= 0 ;i<x.length ; i++   ) {
        
        if(x[i].getAttribute('id') == prod_id  ){
            console.log(i, " paisi  : " , x[i]) ; 

            prod1= x[i] ;
            break ;
        }
    }
    console.log(prod1) ;
    if(prod1 != -1 )console.log(prod1.getAttribute('id') ) ;
    return prod1 ; 
} 
function remove_from_cart(prod_id ) {

    let x =  document.querySelectorAll('.cart-item') ;
 
    let  prod1 = -1; 
    for(let i= 0 ;i<x.length ; i++   ) {
        
        if(x[i].getAttribute('id') == prod_id  ){
            x[i].remove() ; 
            decCount() ;
            break ;
        }
    }
    // console.log("remove from " , id) ;
}
let count = 0 ;
const cartIcon = document.querySelector('.fa-cart-arrow-down') ;
function addCount(){
    count++ ;
    console.log("cnt" , count) ;
    cartIcon.classList.add('non-empty')
    let root = document.querySelector(':root')
    root.style.setProperty('--after-content', `"${count}"`)
   
}


function decCount(){
    count-- ;
    cartIcon.classList.add('non-empty')
    let root = document.querySelector(':root')
    root.style.setProperty('--after-content', `"${count}"`)
   
}










 
