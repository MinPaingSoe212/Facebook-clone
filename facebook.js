let commentBtn=document.querySelectorAll(".comment")
let commentSection=document.querySelectorAll(".comment-section")
let inputComment=document.querySelectorAll(".middle-input-comment")
let profileBtn=document.querySelector(".profine-icon")
let profileSetting=document.querySelector(".profile-setting")
//see more & see less
let seemoreBtn=document.querySelectorAll(".left-list-seemore")
let seemoreList=document.querySelectorAll(".see-more-list")
let seemoreIcon=document.querySelectorAll("downArrow-icon")
let leftSection=document.querySelector(".left-section")
let forToggleAdd=document.querySelectorAll(".for-toggle-add")
//delet comment
let commentDetPopUp=document.querySelectorAll(".commenticon")
let deleteBox=document.querySelectorAll(".delete-box")
let deleteText=document.querySelectorAll(".inner-box-text")
//Light mood and Dark mood
//switch
let OffBtn=document.querySelectorAll(".switch-button-div-Off")
let OnBtn=document.querySelector(".switch-button-div-On")
let buttonCircle=document.querySelectorAll(".button-circle")
let circle=document.querySelectorAll(".fa-circle-small")
//post Section
let postBtn=document.querySelector(".middle-input")
let postDiv=document.querySelector(".post-div")
let middleSection=document.querySelector(".middle-section")
let rightSection=document.querySelector(".right-section")
//creat post
let postSelector=document.querySelector("#selection")
let Btn=document.querySelector(".btn-info")
let inputStatus=document.querySelector(".input-status")

Btn.addEventListener("click",(e)=>{
    console.log("lee" )
    let reader = new FileReader()
    reader.onload = function(){
        const img= new Image()
        img.src=reader.result;
        console.log(img.src,"helo")
        document.body.appendChild(img)
    }
    reader.readAsDataURL=(document.querySelector("[name='photo']").files[0])
    console.log(document.querySelector("[name='photo']").files[0])
    
})

postBtn.addEventListener("click",()=>{
    postDiv.style.display="block"
    leftSection.classList.add("opacity")
    middleSection.classList.add("opacity")
    postDiv.classList.add("nonOpacity")
    rightSection.classList.add("opacity")
    let postBackBtn=document.querySelector(".post")
    postBackBtn.addEventListener("click",()=>{
        postDiv.style.display="none"
        leftSection.classList.remove("opacity")
    middleSection.classList.remove("opacity")
    postDiv.classList.remove("nonOpacity")
    rightSection.classList.remove("opacity")
    })
})
//switch section
OnBtn.addEventListener("click",()=>{
    circle[0].classList.add("off")
    circle[1].classList.remove("off")
    circle[2].classList.add("off")
    //change colors
    document.body.classList.add("dark-theme")
    document.body.style.color="#E0E2E6"
})
OffBtn[0].addEventListener("click",()=>{
    circle[1].classList.add("off")
    circle[0].classList.remove("off")
    circle[2].classList.add("off")
    //change colors
   document.body.classList.remove("dark-theme")
   document.body.style.color="black"
})
OffBtn[1].addEventListener("click",()=>{
    circle[1].classList.add("off")
    circle[0].classList.add("off")
    circle[2].classList.remove("off")
    document.body.classList.remove("dark-theme")
   document.body.style.color="black"
})



//profile-Setting
profileBtn.addEventListener("click",()=>{
    console.log(profileSetting.classList,"first pf")
    
    profileSetting.classList.toggle("commend-open")
    
    let changeMood=document.querySelector(".change-mood")
    let switchSection=document.querySelector(".switch-section")
    changeMood.addEventListener("click",()=>{
        switchSection.classList.add("commend-open")
       
        if(switchSection.classList[1]=="commend-open"){
           profileSetting.classList.remove("commend-open")
           console.log("fire1")
          let backBtn=document.querySelector(".switch-section-header")
          backBtn.addEventListener("click",()=>{
           switchSection.classList.remove("commend-open")
            
          })
        }
        
    })
   
})

//delete comment

//see more & see less
seemoreBtn.forEach(function(e,i){
    seemoreBtn[i].addEventListener("click",()=>{
        seemoreList[i].classList.contains("commend-open")
        console.log(seemoreList[i].classList)
        if(seemoreList[i].classList[1]=="commend-open"){
            seemoreList[i].classList.remove("commend-open")
           
            seemoreBtn[i].innerHTML=`<div class="downArrow-icon"><i class="fa-solid fa-angle-down "></i></div>
            <span class="seemore-text">See More</span>`

        }else{
            seemoreList[i].classList.add("commend-open")
            
         seemoreBtn[i].innerHTML=`<div class="downArrow-icon"><i class="fa-solid fa-angle-up "></i></div>
         <span class="seemore-text">See less</span>`
        }
        
    })
})

//write comments
inputComment.forEach((e,i) => {
    inputComment[i].addEventListener("keypress",(e)=>{
        if(e.key=="Enter"){
            let putting =`<div class="left">
            <div class="cover"><img src="image/my-profie.jpg" class="nf-pf" alt=""></div>
           <div class="comment-below">
                <div class="nameAndDate">
                    <span>Min Paing Soe</span>
                    <span class="comment-text">${inputComment[i].value}</span>
                </div>
                <div class="comment-below-child">
                    <span >like</span>
                    <span >Reply</span>
                    <span class="date">11m</span>
                </div>
           </div>
           <div class="commenticon">
           <i class="fa-solid fa-ellipsis commenticon1 "></i>
           <div class="delete-box comment-close">
                            <div class="inner-box-text">Delete Comment</div>
                            <div class="inner-box-text">report Comment</div>
                        </div>
          </div>
        </div>`
       commentSection[i].innerHTML += putting;
       inputComment[i].value=""
       commentSection[i].classList.remove("comment-close")
       let commentDetPopUp=document.querySelectorAll(".commenticon")
       let deleteBox=document.querySelectorAll(".delete-box")
       let deleteText=document.querySelectorAll(".inner-box-text")
       commentDetPopUp.forEach(function(e,i){
        commentDetPopUp[i].addEventListener("click",()=>{
           deleteBox[i].classList.toggle("comment-close")
           deleteText[i].addEventListener("click",()=>{
            let left=document.querySelectorAll(".left")
            console.log(left[2])
            left[2].innerHTML=""
           
           })
        })
    })
       
    console.log(commentDetPopUp)
        }
        
    })
});
console.log(commentDetPopUp)
//toggle comment
for (let i = 0; i < commentBtn.length; i++) {
    commentBtn[i].addEventListener("click",()=>{
       commentSection[i].classList.toggle('comment-close')
    })
    
}
//post




