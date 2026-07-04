console.warn("The displayed robux are visual only, not real robux. You can't spend them.")
console.warn("Spoofing your real robux will 101% result in a ban, so it is not recommended.")
setInterval(function(){
    var spoofAmount = "1M+"
    var spoofStringLong = "1,038,937"
    if (document.getElementById("nav-robux-amount") != null){
        document.getElementById("nav-robux-amount").textContent = spoofAmount
    }
    if (document.getElementsByClassName("balance-label icon-robux-container")[0] != null){
        if (document.getElementsByClassName("balance-label icon-robux-container")[0].childNodes[0] != null){
            if (document.getElementsByClassName("balance-label icon-robux-container")[0].childNodes[0].childNodes[2] != null){
                document.getElementsByClassName("balance-label icon-robux-container")[0].childNodes[0].childNodes[2].textContent = spoofStringLong
            }
        }
    }
    if (document.getElementsByClassName("balance-disclaimer-text")[0] != null){
        document.getElementsByClassName("balance-disclaimer-text")[0].remove()
    }
    if (document.getElementsByClassName("font-builder-extended content-action-standard text-title-large [font-size:var(--font-size-500)] medium:[font-size:var(--font-size-600)]")[0] != null){
        document.getElementsByClassName("font-builder-extended content-action-standard text-title-large [font-size:var(--font-size-500)] medium:[font-size:var(--font-size-600)]")[0].textContent = spoofStringLong
    }
}, 5)