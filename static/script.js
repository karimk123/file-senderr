
let isSender = false;





function Switch(){



    let switchBtn = document.getElementById("sender-switch")

    isSender = !isSender
    if(isSender){
        switchBtn.innerText = "Switch to receiver"
        document.forms[0].style.display = "block"
        document.forms[1].style.display = "none"
    }
    else{
        
      switchBtn.innerText = "Swtich to sender"
      document.forms[0].style.display = "none"
      document.forms[1].style.display = "block"
    }
    


}



function SubmitDownload(){
  document.forms[1].submit()
  document.getElementById("download-btn").value = "Loading..."
  setTimeout(() => {
    document.getElementById("download-btn").value = "Downloaded"
  },4000)
}


function Help(){

    $("#infoBtn").fadeOut(200)

    let helpDiv = document.createElement("div")
    helpDiv.innerHTML = '<br> <br> <img src="/static/howto.jpg" style="width:100%; height:auto"><br><br><br><br>'
    helpDiv.id = "help"
    document.body.appendChild(helpDiv)

    setTimeout(() => {

    parent.location.hash = "#help";
    },100)
  
    document.getElementsByClassName("fa fa-question")[0].className = "fa fa-arrow-up"
    document.getElementsByClassName("question-btn-li")[0].firstChild.href = "javascript: BackFromHelp()"

}

function BackFromHelp(){
    $("#infoBtn").fadeIn(200)

    parent.location.hash = ""

    setTimeout(() => {
    document.getElementById("help").remove()

    },1000) 
    document.getElementsByClassName("fa fa-arrow-up")[0].className = "fa fa-question"
    document.getElementsByClassName("question-btn-li")[0].firstChild.href = "javascript: Help()"
}

function Info(){


    document.getElementsByClassName("context")[0].innerHTML += '<div id="info" style="background-color:#4e54c8"> <img class="socials" src="/static/githubicon.png" height="30px;"> <img src="/static/discordicon.png" class="socials"  height="30px;"> <img class="socials" src="/static/twittericon.png" height="30px;"><p style = "color:white;">Made by Karims</p></div>'


   
    setTimeout(() => {

    parent.location.hash = "#info";
    },1)
  
    document.getElementsByClassName("fa fa-info")[0].className = "fa fa-arrow-up"
    document.getElementsByClassName("question-btn-li")[1].firstChild.href = "javascript: BackFromInfo()"
    $("#helpBtn").fadeOut(200)

}

function BackFromInfo(){
    $("#helpBtn").fadeIn(200)

    parent.location.hash = ""

    setTimeout(() => {
    document.getElementById("info").remove()

    },300) 
    document.getElementsByClassName("fa fa-arrow-up")[0].className = "fa fa-info"
    document.getElementsByClassName("question-btn-li")[1].firstChild.href = "javascript: Info()"

}