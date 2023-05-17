const list=document.querySelector("#order");
const inputData=document.querySelector("#iname");
const ulist=document.querySelector("#unorder");

inputData.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        storeData(this.value)
        this.value=" "
    }
})

const storeData=(item)=>{
    const data=document.createElement("li");
    data.innerHTML=`${item} 
    <button type="submit">Delete</button>`;
    // console.log(data.innerHTML);
    data.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    data.querySelector("button").addEventListener("click",function(){
        data.remove();
    })
    ulist.appendChild(data);
   
}
