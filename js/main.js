
(() => {
   //print('some message');
   console.log("some message - from JavaScript");

   let allSVGs= document.querySelectorAll(".svg");

   //log the id of the svg to the console when a user hovers on it
  function logSVG(){
    console.log(this.id);
  }

    allSVGs.forEach(item => item.addEventListener("click",logSVG));

})();
