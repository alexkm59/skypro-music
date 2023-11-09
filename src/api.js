
export async function UserRegistrationAPI({userEmail, userPassword, setRegistrationError }) {
    const Response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
  method: "POST",
  body: JSON.stringify({
    email: userEmail,
    password: userPassword,
    username: userEmail,
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
}).then((responce) => {
  
    if (responce.status === 400){
          console.log(`responceStatus_${responce.status}`);
          responce.json().then((json) => {
            const emailError = json.email ? `email:${json.email}` : "";
            const userNameError = json.username ? json.username : "";
            const passwordError = json.password ? json.password : "";
            const error = emailError+userNameError+passwordError;
            
            setRegistrationError(error)});
          return
        }
        if (responce.status === 201){
          console.log(`responceStatus_${responce.status}`);
          responce.json().then((json) => {
            console.log(`Json_201_${json}`);
            return json});
        }
    
})

// const user = await Response.json();
// return user;

}


export async function getPlayList() {
    const Response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    
    if (!Response.ok){
        
        if(Response.status === 500){
        throw new Error ("Ошибка сервера");
        }
    }

    
    
    const data = await Response.json();
    return data;
    }