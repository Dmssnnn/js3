
const welcomeSection = document.createElement("section");
const container = document.createElement("div");

container.style.display = "flex";
container.style.backgroundColor = "#252B42"
container.style.alignItems = "center"
container.style.flexDirection = "column"

// WELCOMEDIV SECTION START //
const welcomeDiv = document.createElement("div")
welcomeDiv.style.display = "flex"
welcomeDiv.style.flexDirection = "column"
welcomeDiv.style.justifyContent = "center"
welcomeDiv.style.alignItems = "center"
welcomeDiv.style.marginTop = "150px"
welcomeDiv.style.fontFamily = "monseratt"   
welcomeDiv.innerHTML = `
    <h4>welcome</h4>
    <h1>Selling on the internet like a pro</h1>
    <p>We know how large objects will act, but things on a 
    small scale just do not act that way.</p>

`
const welcomeTitle = welcomeDiv.querySelector("h4")
welcomeTitle.style.fontSize = "16px"
welcomeTitle.style.fontWeight = "700"
welcomeTitle.style.lineHeight = "24px"
welcomeTitle.style.color = "#23A6F0"

const welcomeDivMainTitle = welcomeDiv.querySelector("h1")
welcomeDivMainTitle.style.fontSize = "58px";
welcomeDivMainTitle.style.fontWeight = "700";
welcomeDivMainTitle.style.lineBreak = "80px";
welcomeDivMainTitle.style.marginTop = "30px"
welcomeDivMainTitle.style.color = "#FFFF"
welcomeDivMainTitle.style.width = "542px"
welcomeDivMainTitle.style.textAlign = "center"
welcomeDivMainTitle.style.letterSpacing = "0.2px"

const welcomeDivPara = welcomeDiv.querySelector("p")
welcomeDivPara.style.fontSize = "20px"
welcomeDivPara.style.width = "536px"
welcomeDivPara.style.height = "60px"
welcomeDivPara.style.color = "#FFFF"
welcomeDivPara.style.letterSpacing = "0.2px"
welcomeDivPara.style.marginTop = "30px"
welcomeDivPara.style.textAlign = "center"


container.appendChild(welcomeDiv)
// WELCOMEDIV SECTION END //


//BUTTON DIV START //

const buttonsDiv = document.createElement("div");
buttonsDiv.style.marginTop = "100px"
buttonsDiv.innerHTML = `
<button id ="quoteButton" class="button1">Get Quote Now</button>
<button class="button2">Learn More</button>
`
const buttonsDivQuoteButton = buttonsDiv.querySelector('.button1')
buttonsDivQuoteButton.style.backgroundColor = "252B42"
buttonsDivQuoteButton.style.color  = "#23A6F0"                           /////////////////////// bgc  #23A6F0 //
buttonsDivQuoteButton.style.size = "14px"
buttonsDivQuoteButton.style.width = "193px"
buttonsDivQuoteButton.style.height = "52px"  
buttonsDivQuoteButton.style.padding = "15px, 40px, 15px, 40px"
buttonsDivQuoteButton.style.borderRadius = "5px"
buttonsDivQuoteButton.style.border = "1px solid"
buttonsDivQuoteButton.style.borderColor = "#23A6F0"
buttonsDivQuoteButton.style.transition = "background-color 0.3s, color 0.3s";


const buttonsDivLearnMoreButton = buttonsDiv.querySelector(".button2")
buttonsDivLearnMoreButton.style.width = "164px"
buttonsDivLearnMoreButton.style.height = "52px"
buttonsDivLearnMoreButton.style.color = "#23A6F0"
buttonsDivLearnMoreButton.style.backgroundColor ="252B42"
buttonsDivLearnMoreButton.style.borderColor = "#23A6F0"
buttonsDivLearnMoreButton.style.padding = "15px, 40px, 15px, 40px"
buttonsDivLearnMoreButton.style.borderRadius = "5px"
buttonsDivLearnMoreButton.style.border = "1px solid"
buttonsDivLearnMoreButton.style.borderColor = "#23A6F0"
buttonsDivLearnMoreButton.style.transition = "background-color 1s, color 0.3s"


welcomeDiv.appendChild(buttonsDiv)

//BUTTON DIV END //

// WELCOME BLOCKS DIV START //
const blocksWrapper = document.createElement("div")
blocksWrapper.style.marginTop = "50px"
blocksWrapper.style.marginBottom = "50px"
blocksWrapper.style.display = "flex"
blocksWrapper.style.gap = "10px"

blocksWrapper.style.justifyContent = "center"


const trainingCoursesBlock = document.createElement("div")
trainingCoursesBlock.style.height = "200px"
trainingCoursesBlock.style.backgroundColor = "white";
trainingCoursesBlock.style.padding = "2.5%"
trainingCoursesBlock.style.transition = "background-color 0.3s, color 0.3s";
trainingCoursesBlock.innerHTML  = `
<img src="images/smile.svg" alt="smily">
<h5>training Courses</h5>
<p>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
`
const trainingBlockTitle = trainingCoursesBlock.querySelector("h5")

trainingBlockTitle.style.fontSize = "16px"
trainingBlockTitle.style.color = "black"
trainingBlockTitle.style.fontWeight = "700"

const trainingBlockPara = trainingCoursesBlock.querySelector("p")

trainingBlockPara.style.fontSize = "14px"
trainingBlockPara.style.fontWeight = "400"
trainingBlockPara.style.width = "222px"
trainingBlockPara.style.height = "60px"

blocksWrapper.appendChild(trainingCoursesBlock)
welcomeDiv.appendChild(blocksWrapper)

const onlineCoursesBlock = document.createElement("div")
onlineCoursesBlock.style.height = "200px"
onlineCoursesBlock.style.backgroundColor = "white";
onlineCoursesBlock.style.padding = "2.5%";
onlineCoursesBlock.style.transition = "background-color 1s, color 0.3s";
onlineCoursesBlock.innerHTML =  `
<img src="images/correctLogo.svg" alt="correctLogo">
<h5>2,769 online courses</h5>
<p>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
`
    const onlineCourseTitle = onlineCoursesBlock.querySelector("h5")

    onlineCourseTitle.style.fontSize = "16px"
    onlineCourseTitle.style.color = "black"
    onlineCourseTitle.style.fontWeight = "700"


    const onlineCoursepara = onlineCoursesBlock.querySelector("p")

    onlineCoursepara.style.fontSize = "14px"
    onlineCoursepara.style.fontWeight = "400"
    onlineCoursepara.style.width = "222px"
    onlineCoursepara.style.height = "60px"
    
blocksWrapper.appendChild(onlineCoursesBlock)

const cardCoursesBlock = document.createElement("div")
cardCoursesBlock.innerHTML = `
<img src="images/card.svg" alt="correctLogo">
<h5>training Courses</h5>
<p>The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
`
cardCoursesBlock.style.height = "200px"
cardCoursesBlock.style.backgroundColor = "#FFFF";
cardCoursesBlock.style.padding = "2.5%";
buttonsDivQuoteButton.style.transition = "background-color 1s, color 0.3s";


const cardCoursesImg = cardCoursesBlock.querySelector("img")
cardCoursesImg.style.backgroundColor = "#FFFFFF"
cardCoursesImg.style

const cardCourseTitle = cardCoursesBlock.querySelector("h5")
cardCourseTitle.style.fontSize = "16px"
cardCourseTitle.style.color = "#FFFFFF"
cardCourseTitle.style.fontWeight = "700"

const cardCoursePara = cardCoursesBlock.querySelector("p")
cardCoursePara.style.fontSize = "14px"
cardCoursePara.style.fontWeight = "400"
cardCoursePara.style.width = "222px"
cardCoursePara.style.height = "60px"

blocksWrapper.appendChild(cardCoursesBlock)

//WELCOME BLOCKS DIV END//
welcomeSection.appendChild(container);

// FEATURED PRODUCTS BLOCK START//

const featuredProductsDiv = document.createElement("div")
featuredProductsDiv.style.height = "594px"
featuredProductsDiv.style.display = "flex"
featuredProductsDiv.style.flexDirection = "column"
featuredProductsDiv.style.justifyContent = "center"
featuredProductsDiv.style.alignItems = "center"
featuredProductsDiv.style.gap = "20px"
featuredProductsDiv.innerHTML = `
<h6>Practice Advice</h6>
<h2>Featured Products</h2>
<p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>

`

    const featuredDivTitle = featuredProductsDiv.querySelector("h6")
    featuredDivTitle.style.fontSize = "14px"
    featuredDivTitle.style.color = "#23A6F0"
    featuredDivTitle.style.lineHeight = "24px"

    const featuredDivMainTitle = featuredProductsDiv.querySelector("h2")
    featuredDivMainTitle.style.fontSize = "40px"
    featuredDivMainTitle.style.lineHeight = "50px"

    const featuredDivPara = featuredProductsDiv.querySelector("p") 
    featuredDivPara.style.fontSize = "14px"
    featuredDivPara.style.width = "469px"
    featuredDivPara.style.height = "40px"
    featuredDivPara.style.textAlign = "center"
welcomeSection.appendChild(featuredProductsDiv)

const welcomeSectionInputBlock = document.createElement("div")

/// input gaadide ///
welcomeSectionInputBlock.style.width  = "100%"
welcomeSectionInputBlock.style.marginTop = "20px"
welcomeSectionInputBlock.style.display = "flex"
welcomeSectionInputBlock.style.justifyContent = "center"
welcomeSectionInputBlock.style.gap = "1px"
welcomeSectionInputBlock.innerHTML = `
<input type="email" placeholder="Your Email"></input>
<button>Subscribe</button>
`
    const welcomeSectionInput = welcomeSectionInputBlock.querySelector("input")
    welcomeSectionInput.style.width = "688px"
    welcomeSectionInput.style.height = "58px"
    welcomeSectionInput.style.color = "#E6E6E6"

    const WelcomeSectionButton = welcomeSectionInputBlock.querySelector("button")
    WelcomeSectionButton.style.width = "117px"
    WelcomeSectionButton.style.height = "58px"
    WelcomeSectionButton.style.backgroundColor =  "#23A6F0"
    WelcomeSectionButton.style.color = "#FFFFFF"
    WelcomeSectionButton.style.border = "none"

featuredProductsDiv.appendChild(welcomeSectionInputBlock)
// FEATURED PRODUCTS BLOCK END//
document.body.appendChild(welcomeSection);

function changequoteButtonColor () {
    const buttonsDivQuoteButton = buttonsDiv.querySelector('.button1')
    buttonsDivQuoteButton.addEventListener("mouseenter" , () => {
        buttonsDivQuoteButton.style.color = "#FFFF"
        buttonsDivQuoteButton.style.backgroundColor = " #23A6F0";
    })

    buttonsDivQuoteButton.addEventListener("mouseleave", () => {
        buttonsDivQuoteButton.style.color = "#23A6F0"
        buttonsDivQuoteButton.style.backgroundColor = " #FFFF";
    })
}
changequoteButtonColor ()



function changeLearnMoreButtonCollor () {
    const learnMoreButton = buttonsDiv.querySelector(".button2")
    learnMoreButton.addEventListener("mouseenter" , () => {
        learnMoreButton.style.color = "#FFFF"
        learnMoreButton.style.backgroundColor = " #23A6F0";
    })
    learnMoreButton.addEventListener("mouseleave" , () => {
        learnMoreButton.style.color = "#23A6F0"
        learnMoreButton.style.backgroundColor = " #FFFF";
    })
}
changeLearnMoreButtonCollor()



function changeTrainingCoursesColor () {
    trainingCoursesBlock.addEventListener("mouseenter" , () => {
        trainingCoursesBlock.style.color = "#FFFF"
        trainingCoursesBlock.style.backgroundColor ="#23A6F0"
    })

    trainingCoursesBlock.addEventListener("mouseleave" , () => {
        trainingCoursesBlock.style.color = "#23A6F0"
        trainingCoursesBlock.style.backgroundColor ="#FFFF"
    })
}
changeTrainingCoursesColor()


function changeOnlineCoursesBlockColor () {
        onlineCoursesBlock.addEventListener("mouseenter" , () => {
        onlineCoursesBlock.style.color = "#FFFF"
        onlineCoursesBlock.style.backgroundColor ="#23A6F0"
    })

    onlineCoursesBlock.addEventListener("mouseleave" , () => {
        onlineCoursesBlock.style.color = "#23A6F0"
        onlineCoursesBlock.style.backgroundColor ="#FFFF"
    })
}


changeOnlineCoursesBlockColor ()


function changeCardCoursesBlockColor () {
    cardCoursesBlock.addEventListener("mouseenter" , () => {
    cardCoursesBlock.style.color = "#FFFF"
    cardCoursesBlock.style.backgroundColor ="#23A6F0"
    cardCoursesBlock.style.transition = "all 0.3s"
})

    cardCoursesBlock.addEventListener("mouseleave" , () => {
    cardCoursesBlock.style.color = "#23A6F0"
    cardCoursesBlock.style.backgroundColor ="#FFFF"
})
}


changeCardCoursesBlockColor ()