
const signup = async () => {
    await fetch("http://196.223.240.154:8099/supapp/api/auth/client/signup",{
        method : 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: "pogba1@gmail.com",
            firstName: "Elua",
            lastName: "Bugingo",
            mobile: "0788737678",
            password: "PogbaRupfu6$"
       })
    }).then((data) => {
        console.log(data);
        return data.json();
    }).then(data => console.log(data))
}

export default signup


