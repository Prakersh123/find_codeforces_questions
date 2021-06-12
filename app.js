const search = document.querySelector("#searchbar");
let to_insert = document.querySelector("#grdy")
let bdy = document.querySelector('body');
search.addEventListener("submit", async (e)=>{
    e.preventDefault();
    var query = search.elements.qry.value;
    var config = {params:{tags:query}};
    await axios.get(' https://codeforces.com/api/problemset.problems',config)
    .then(res=>{
    
        let problems =res.data.result.problems
        if(problems.length)
        {
        console.log(res.data);
        var url = "https://codeforces.com/problemset/problem/"
        for(let i =0 ;i<100;i++)
        {
        
           var li= document.createElement("li");
           var link = document.createElement('a');
        //    var address = url+problems[i].contestID+'/'+problems[i].index;
           link.setAttribute('href',`https://codeforces.com/problemset/problem/${problems[i].contestId}/${problems[i].index}`);
            link.innerHTML= problems[i].name;
           li.appendChild(link);
            
           to_insert.appendChild(li);
        // console.log(problems[i].name);
        }
        search.elements.qry.value = ""
        }
        else
        {
            alert("not found")
            problems=[];
            search.elements.qry.value=''
        }
}).catch((e)=>{
        console.log(e)
    })
    
})

