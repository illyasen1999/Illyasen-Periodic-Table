let periodicTable = () => {
  let atomicNumber = document.getElementById("atmc-number").value
  let periodicUrl = `https://neelpatel05.pythonanywhere.com/element/atomicnumber?atomicnumber=${atomicNumber}`;

  fetch(periodicUrl)
    .then((res) => res.json())
    .then((element) => {
      console.log(element);

      let elementOutputCard = ''
      let elementOutputDetails = ''

      let [ atMass, atNum, atName, atSymbol, atGroup ] = [
        element.atomicMass,
        element.atomicNumber,
        element.name,
        element.symbol,
        element.groupBlock
      ]
      
      elementOutputCard += `
        <h3 class="atmc-number-card">${atNum}</h3>
        <h2 class="atmc-symbol-card">${atSymbol}</h2>
        <h3 class="atmc-mass-card">${atMass}</h3>
        <h3 class="atmc-name-card">${atName}</h3>
      `
      elementOutputDetails += `
        <h3>Atomic Mass: ${atMass}</h3> <br>
        <h3>Atomic Number: ${atNum} </h3> <br>
        <h3>Name: ${atName} </h3> <br>
        <h3>Symbol: ${atSymbol}</h3> 
      `

      document.querySelector(".element-card")
      .innerHTML = elementOutputCard

      document.querySelector(".element-details")
      .innerHTML = elementOutputDetails

        switch(atGroup){
          case "alkali metal":
              document.querySelector(".element-card")
              .style.backgroundColor = "#ff00ff"
              break;
      
          case "alkaline earth metal":
              document.querySelector(".element-card")
              .style.backgroundColor = "#afeeee"
              break;
      
          case "transition metal":
              document.querySelector(".element-card")
              .style.backgroundColor = "#dcdcdc"
              break;
      
          case "metal":
              document.querySelector(".element-card")
              .style.backgroundColor = "#87ceeb"
              break;
      
          case "halogen":
              document.querySelector(".element-card")
              .style.backgroundColor = "#32cd32"
              break;
      
          case "noble gas":
              document.querySelector(".element-card")
              .style.backgroundColor = "#8ab9f1"
              break;
      
          case "lanthanoid":
              document.querySelector(".element-card")
              .style.backgroundColor = "#fbcce7"
              break;
      
          case "actinoid":
              document.querySelector(".element-card")
              .style.backgroundColor = "#deb887"
              break;
      
          case "nonmetal":
              document.querySelector(".element-card")
              .style.backgroundColor = "#ffd700"
              break;
      
          case "metalloid":
              document.querySelector(".element-card")
              .style.backgroundColor = "#fddde6"
              break;
      
          case "post transition metal":
              document.querySelector(".element-card")
              .style.backgroundColor = "#ffa07a"
              break;
          default:
              document.querySelector(".element-card")
              .style.backgroundColor = "#ffffff"
      }
    });
};
let searchBtn = document.getElementById('atmcNumber-btn')
.addEventListener('click', periodicTable)

document.querySelector("[name=atmc-number]").addEventListener("keyup", (e) => {
  if(e.key == "Enter"){
      console.log("Enter");
      periodicTable()
  }
})