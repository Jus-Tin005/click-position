const getMap = document.querySelector(".map-container");

var getSmallColor = document.getElementById('small-color'),
      getMediumColor = document.getElementById('medium-color'),
      getLargeColor = document.getElementById('large-color');


var circleIdx = 0;


getMap.addEventListener('click',(e)=>{
        // console.log("hooo");
        circleIdx++;

      //   console.log(e.target);

        if(e.target.classList.contains("map-container")){
                  const cX = e.clientX;
                  const cY = e.clientY;
                  // console.log(cX,cY);

                  // const mapTop = e.target;
                  const mapLeft = e.target.offsetLeft;
                  const mapTop = e.target.offsetTop;
                  // console.log(mapLeft,mapTop);

                  const curX = cX - mapLeft;
                  const curY = cY - mapTop;
            //   console.log(curX,curY);

                  const circle = document.createElement("span");
                  // console.log(circle);
                  circle.id = circleIdx;
                  circle.classList.add("circle");
                  // console.log(circle);

                  circle.style.left = `${curX}px`;
                  circle.style.top = `${curY}px`;

                  /* circle.style.setProperty("--small-color","darkblue");
                  circle.style.setProperty("--medium-color","steelblue");
                  circle.style.setProperty("--large-color","skyblue"); */

                  // console.log(getSmallColor.value);
                  // console.log(getSmallColor.selectedIndex);

                  if(getSmallColor.selectedIndex > 0 && getMediumColor.selectedIndex > 0 && getLargeColor.selectedIndex > 0){
                              circle.style.setProperty("--small-color",getSmallColor.value);
                              circle.style.setProperty("--medium-color",getMediumColor.value);
                              circle.style.setProperty("--large-color", getLargeColor.value);
                  }

                  e.target.appendChild(circle);
                  // this.appendChild(circle);


        }

      removePointer(e);
});



function removePointer(e){
      // console.log(e);
      // console.log(e.target);
      // console.log(e.target.id);

      if(e.target.id === 0){
            e.target.remove();
      }
}