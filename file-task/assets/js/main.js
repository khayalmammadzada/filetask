let upload = document.getElementById("upload");
let dropZone = document.querySelector(".dropZone");
let table = document.querySelector(".table")

upload.addEventListener("change", function (e) {
  let files = Array.from(e.target.files);
  files.forEach((file) => {
    showImage(file);

  });
});



function showImage(file) {
  if (!file.type.includes("image/")) {
    alert("Please choose image file");
    return;
  }
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("loadend", function () {
    let src = fileReader.result;
    let tr = document.createElement("tr");
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")
    let td5=document.createElement("td")
    table.style.display="block"
    table.append(tr)
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    let name=file.name
    td2.append(name)
    let size=file.size
    td3.append(size)
    let type=file.type
    td4.append(type)
    let btn = document.createElement("button");
    btn.className = "btn btn-outline-primary";
    btn.innerText = "X";
    td5.append(btn)
    let no=file.no
    td1.append(no)
 
    

    btn.addEventListener("click", function () {
      if (confirm("Are you sure about that")) {
        td5.parentElement.remove();
      }
    });

    
  });
}


dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  let files = Array.from(e.dataTransfer.files);
  let count=0
  for (let i = 0; i < files.length; i++) {
     
      
  }
});