const currentTime = new Date()
const hours = currentTime.getHours()
var morningStart = 0
var afternoonStart = 12
var eveningStart = 18
const homeText = document.getElementById("HomeContainer").getElementsByClassName("col-xs-12 container-header")[0].childNodes[0]
const displayNameText = document.getElementsByClassName("text-overflow age-bracket-label-username font-caption-header")[0]
setInterval(function(){
    if (hours > morningStart & hours < afternoonStart){
        homeText.textContent = "Good morning, " + displayNameText.textContent
    } else if (hours > afternoonStart & hours < eveningStart){
        homeText.textContent = "Good afternoon, " + displayNameText.textContent
    } else {
        homeText.textContent = "Good evening, " + displayNameText.textContent
    }
}, 100)
