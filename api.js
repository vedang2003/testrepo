// var searchValue = ""
// function searchItem(){
//   searchValue = document.getElementById('search').value
// }

// console.log(searchValue)


var imgsrc = ['https://nrs.harvard.edu/urn-3:HUAM:DDC252445_dynmc?height=675', 'https://nrs.harvard.edu/urn-3:HUAM:50737_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:51267_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:DDC232089_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:75699_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:INV121896_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:50736_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:76149_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:51253_dynmc?height=675','https://nrs.harvard.edu/urn-3:HUAM:INV054851_dynmc?height=675']



var url = 'https://api.harvardartmuseums.org/exhibition?apikey=a98c34f6-c8c7-49c9-b282-a5558439f6d4';
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((apidata) => {
          console.log(apidata);
          document.getElementById("searchItem").addEventListener("click",()=>{
            for(var j = 0;j < apidata.records.length;j++){
              if(document.getElementById('search').value == apidata.records[j].title){
                console.log("match ka pata nahi kya hua")
                console.log(j)
                document.getElementById("apiImage").src = imgsrc[j]
                break
                }
                else if(document.getElementById('search').value != apidata.records[j].title){
                  // console.log("")
                  continue
                }
              }
          })
      })
      .catch((err) => {
        console.log(err);
      });
      