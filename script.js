window.addEventListener('load', function(){
    console.log ('window loaded');
    let response = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    response.then(function(response){
        let json=response.json();
        json.then(function(json){
            json=json.sort(function(a,b){
                return a.hoursInSpace- b.hoursInSpace;
            });
            json=json.reverse();
            for (i=0; i<json.length; i++){
                let container= document.getElementById('container');
                container.innerHTML=container.innerHTML+(`
                    <div class="astronaut">
                        <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="active${json[i].active}">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                    </div>
                `);
            }
        })
    })
})