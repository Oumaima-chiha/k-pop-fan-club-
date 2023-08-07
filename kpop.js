function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


function kpopGroups(name,members){
  return {
    name:name,
   members:members
    
  }
}
var kpopGroups=[
  {name:"bts",members:7},
  {name:"blackpink",members:4},
  {name:"new Jeans",member:5}, 
  {name:"fifty-fifty",member:4}
  ]

function searchByName(query,array){
  return filter (array,function(element,index){
    if(array[i].name.includes(query)){
            result.push(array[i])
    }
  })
  return result
}
