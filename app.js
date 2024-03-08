const inputF= document.querySelector("#search");
const container = document.querySelector('.container2');
let data ="";
inputF.addEventListener("keyup", (e) => {

    const Valuee = document.querySelector('#search').value;
    // alert(value)
    if(Valuee !== " "){

        // const Link1 = ''; 
let xhr = new XMLHttpRequest();
xhr.open('GET',`https://www.omdbapi.com/?apikey=5925bc0b&s=${Valuee}`,true);
// xhr.onprogress = function(){
//     console.log(this.readyState)
// }
// if()
xhr.onreadystatechange = ()=>{
    console.log("Ready state is: "+xhr.readyState);
}
xhr.onload = function(){
    if(this.status===200){
        //good to go
        let content = JSON.parse(this.responseText);
      content=content.Search;
        
        content.forEach((movi)=>{
            console.log(movi);
            if(movi.Poster ==""){
                movi.Poster = 'http://via.placeholder.com/400'

            }else{
                movi.Poster=movi.Poster;
            }
            data+=`
            <div class="product-card">
            <div class="badge">New</div>
            <div class="product-tumb">

                <img src="${movi.Poster}">
            </div>
            <div class="product-details">
                <span class="product-catagory">${movi.Type}</span>
                <h4>${movi.Title}</h4>
               
                <div class="product-bottom-details">
                    <div class="product-price">${movi.Year}</div>
                    <div class="product-links">
                        <a href="#"><i class="fa fa-heart"></i></a>
                    </div>
                </div>
            </div>
        </div> 
            `;

            // console.log(data);
            document.querySelector('.container2').innerHTML = data;
    });
    //    alert("dsds")
    }else{
        console.log("data not found");
    }
}
xhr.send()
    }else{
        data = "";
        // alert("can not be ")
        document.querySelector('.container2').innerHTML = data;
    }

    e.preventDefault();
  });




  