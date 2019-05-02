var videos = document.querySelectorAll(".header-video video");
var lista = document.querySelectorAll('#video-lista li');




function recorrerLista(lis, index){

   function clickLista(){

      function recorrerVideos(vid, index){
         vid.style.display = "none";
         vid.pause();
      }

      videos.forEach(recorrerVideos);
      
      videos[index].play();
      videos[index].style.display = "block";
   }



   lis.addEventListener('click', clickLista);
}


lista.forEach(recorrerLista);