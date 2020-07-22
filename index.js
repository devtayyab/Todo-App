function Additem(){
    var show=document.getElementById("showdata")
    var txt=document.getElementById("todo")
    // create row elemet
    var trelem=document.createElement("tr")
    trelem.setAttribute("class","row")
    var tdelem=document.createElement("td")
    var txtvalue=document.createTextNode(txt.value)
   
    // create delete and edit button
    var btn=document.createElement("button")
    var deltxt=document.createTextNode("DELETE")
    btn.appendChild(deltxt)
    btn.setAttribute("onclick","Delrow(this)")
    btn.setAttribute("class","btn")
    
    var edbtn=document.createElement("button")
    var edtxt=document.createTextNode("Edit")
    edbtn.appendChild(edtxt)
    edbtn.setAttribute("class","btn")
    edbtn.setAttribute("onclick","Edit(this)")
    


    tdelem.appendChild(txtvalue)
    tdelem.appendChild(btn)
    tdelem.appendChild(edbtn)
    trelem.appendChild(tdelem)
    show.appendChild(trelem)
    
}
function Delrow(e){
    e.parentElement.remove()
}
function Edit(e){
    var input=prompt("Enter Updated value",e.parentElement.firstChild.nodeValue)
    e.parentElement.firstChild.nodeValue = input
    console.log(e.parentElement.firstChild)
    
}
function DellAll(){
    var show=document.getElementById("showdata")
    show.innerHTML=""    
}