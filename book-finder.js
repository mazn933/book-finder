const small_container=document.querySelector('.small-container');
const SearchIcon=document.querySelector('.fa-search');
const error=document.querySelector('.error');
const container=document.querySelector('.container');
const search_input=document.querySelector('.result');


function Gettinghtml(dt){
  container.classList.remove('background-img')

   let result='';

   if(dt===undefined){error.innerHTML='The book could not be found';}

   dt.map((rls)=>{
    ;

     if(rls.volumeInfo.description===undefined)
     {rls.volumeInfo.description=''}

     if(rls.volumeInfo.categories===undefined)
     {rls.volumeInfo.categories=''}

     if(rls.volumeInfo.authors===undefined)
     {rls.volumeInfo.authors=''}

     if(rls.volumeInfo.imageLinks===undefined)
     {rls.volumeInfo.imageLinks=''}

     result += 
    
`  
    <div class="book-info">
       <img src="${rls.volumeInfo.imageLinks.smallThumbnail}" alt="" class='book-image'>

      <div class="basic-info">
         <p class='book-name'>Book name:<span>${rls.volumeInfo.title}</span></p>
          <p class='book-author'>Author name: <span>${rls.volumeInfo.authors}</span></p>
          <p class='book-catagory'>Catagories: <span>${rls.volumeInfo.categories }</span></p>
      </div>
      <div class='read'><a href="${rls.volumeInfo.previewLink}">Read More</a>
    </div>
  </div>`
   })
   small_container.innerHTML=result
}

const apikey='AIzaSyBhW0wCV_uKq_roFuU_B2-kX6xdCJw2-54';

SearchIcon.addEventListener('click',function(){
  search_input.classList.add('moveitTotop');
  container.classList.add('changingstyle');
  small_container.classList.add('second-class_small_container')
  document.querySelector('body').classList.add('changeBackgroundColor')
  
  
  const inp=document.querySelector('input').value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${inp}&key=${apikey}`)
  .then(response => response.json()).then(data => {Gettinghtml(data.items)})

})