
export async function UserRegistration({userEmail, userPassword }) {
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
})

  .then((response) => response.json())
//   .then((json) => console.log(json.email));
  
return Response;
}



export async function getPlayList() {
    const Response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    
    if (!Response.ok){
        throw new Error ("Ошибка сервера");
    }
    
    const data = await Response.json();
    return data;
    }