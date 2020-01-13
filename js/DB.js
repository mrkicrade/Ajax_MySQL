class DB {

    static getData(){
        let flights = [];
            
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "json"
        })
        .done(function (res) {
            // console.log(res);
            // console.log(res.length);
            for (let i = 0; i < res.length; i++) {
                let name = res[i].name;
                let username = res[i].username;
                let email = res[i].email;
                // console.log(name);
                // console.log(username);
                // console.log(email);
                let flight = {
                    name : name,
                    username : username,
                    email : email
                }
                flights.push(flight);
            }
            // console.log(flights);
            return new Promise(function (resolve, reject) {
                let xml = new XMLHttpRequest();

                xml.onreadystatechange = function () {
                    if (xml.readyState == 4 && xml.status == 200) {
                        //xml.responseText
                        // console.log(xml.responseText);
                        console.log(xml.responseText);
                    }
                }
                xml.open('POST', 'save_data.php');
                xml.setRequestHeader("Content-type", "application/json");
                xml.send(JSON.stringify(flights));
            });
        })
    }

    static getAll(){
        // console.log('Hello');
        return new Promise(function(resolve, reject){
            let xml = new XMLHttpRequest();

            xml.onreadystatechange = function(){
                if (xml.readyState == 4 && xml.status == 200) {
                    //xml.responseText
                    // console.log(xml.responseText);
                    console.log(JSON.parse(xml.responseText));
                    
                }
            }
            xml.open('GET', 'get_data.php');
            xml.send();
        });
    }
}