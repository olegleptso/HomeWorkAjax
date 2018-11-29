const parent = document.querySelector("#parent");

async  function getRequest () {
    try {
        const response = await fetch("https://test-users-api.herokuapp.com/users/");
        const json =  await response.json();
        return json;
    }
    catch(err) {
        console.log(err);
    }
};

getRequest()
    .then((json)=>{
        {
            for (let i=0; i < json.data.length; i++){
                userCard(json.data[i]);
            }
        }   
    return "Done";
    });

function userCard(obj) {
    const block  = document.createElement("div");
    block.classList += "blockstyle"
    const name = obj.name;
    const age = obj.age;
    block.innerHTML = 'Name: ' + name + '<br/>' + 'Age: ' + age;
    parent.append(block);

}