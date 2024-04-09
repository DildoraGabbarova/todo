let tbody= document.querySelector(`.tbody`)
let arr = []
let  currentitem;
let savebtnnivazifasi = "add"

function save(event){
    if(event.target[0].value != "" &&  event.target[1].value != "" &&  event.target[2].value != ""){
        let obj = {
        
            firstname: event.target[0].value,
            lastname: event.target[1].value,
            age: event.target[2].value,
        }
        if(savebtnnivazifasi === "add"){
            arr.push(obj)
        }else{

            arr[currentitem] = obj
            savebtnnivazifasi = "add"
        }
    
  
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    event.preventDefault()
    draw()
   
    }else{
        alert("ichini to'ldiring")
    }
        
}
function draw(){
    let qiymat = ""
    for(let item in arr){
        qiymat += `<tr>
            <td>${arr[item].firstname}</td>
            <td>${arr[item].lastname}</td>
            <td>${arr[item].age}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" onclick="edititem(${item})" class="btn btn-success">edit</button>
                <button type="button" onclick="deleteitem(${item})" class="btn btn-danger">delete</button>
                </div>
            </td>       
        </tr>`
        
    }
    tbody.innerHTML = qiymat
}
function deleteitem(item){
    arr.splice(item,1)
    draw()
}
function edititem(item){
    savebtnnivazifasi = "edit"
    currentitem = item 
    let obj = arr[item]
    document.forms[0][0].value = obj.firstname
    document.forms[0][1].value = obj.lastname
    document.forms[0][2].value = obj.age


}

















 



















