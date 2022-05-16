

//  click button  

let btn = document.querySelectorAll('.mainBtn') ;
let mbtn = document.querySelectorAll('.minusBtn') ;
let pbtn = document.querySelectorAll('.plusBtn') ;

let data =  {} ;
let arr = [] ;

data.id = 1 ;
data.cnt = 5  ;
data.name = 'razer'  ;

arr.push(data) ; 

console.log(btn   ) ;
console.log( data )  ; 
console.log( arr )  ; 
console.log(arr.length  ) ;

for(let i = 0;i < btn.length  ; i++ ) {
    let x =  btn[i] ;

    btn[i].addEventListener('click', ()=>{
        // btn[i].innerText = 1;  
 
        // update 
        let prodQuant = btn[i].parentElement.previousElementSibling   ; 
        let prodQuant1 = prodQuant.getElementsByClassName('quantity-s')[0]    ;
        console.log(prodQuant1.innerText ) ;
        if(prodQuant1.innerText ==5 ) {
            x.innerText = 1 ;
            pbtn[i].style.display = 'inline-block' ;
            mbtn[i].style.display = 'inline-block' ;
            
            let  str = prodQuant1.innerText-1  ;
        
            prodQuant1.innerText  = str ;
        
        }
    })   
    
    mbtn[i].addEventListener('click', ()=>{
        mbtnClicked(btn[i] , pbtn[i] , mbtn[i]) ;   
    })   

    pbtn[i].addEventListener('click', ()=>{ 
        pbtnClicked(btn[i] , pbtn[i] , mbtn[i]) ;   
    })   

}


function pbtnClicked(_btn , _pbtn , _mbtn) {
    // add to cart 
    // remove from avail 
    if( 1 + parseInt(_btn.innerText) > 5  ) return  ;  

    let prodQuant = _btn.parentElement.previousElementSibling   ; 
    let prodQuant1 = prodQuant.getElementsByClassName('quantity-s')[0]    ;
    console.log(prodQuant1.innerText ) ;
 
    let  str = prodQuant1.innerText-1  ;
    
    prodQuant1.innerText  = str ;


    _btn.innerText = 1 + parseInt(_btn.innerText)   ;
    _mbtn.style.display = 'inline-block' ;
    _pbtn.style.display = 'inline-block' ;
}
function mbtnClicked(_btn , _pbtn , _mbtn ) {
    // remove to cart 
    // add from avail 
    
    let prodQuant = _btn.parentElement.previousElementSibling   ; 
    let prodQuant1 = prodQuant.getElementsByClassName('quantity-s')[0]    ;
    console.log(prodQuant1.innerText ) ;
 
    let  str = parseInt(prodQuant1.innerText)  +1  ;
    prodQuant1.innerText  = str ;

    
    if( _btn.innerText-1 == 0  ) {
   
        _btn.innerText = 'Add to cart';
  
        _pbtn.style.display = 'none' ; 
        _mbtn.style.display = 'none' ;
    } else {
        _btn.innerText = _btn.innerText-1 ;
        _pbtn.style.display = 'inline-block' ; 
        _mbtn.style.display = 'inline-block' ;
    
    }


}
