
export async function UserRegistrationAPI({userEmail, userPassword }) {
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

const data = await Response;
return data;

}

export async function UserLoginAPI({userEmail, userPassword }) {
  const Response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
  method: "POST",
  body: JSON.stringify({
    email: userEmail,
    password: userPassword,
  }),
  headers: {
    // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
    "content-type": "application/json",
  },
})
  console.log(userEmail);
const data = await Response;
return data;
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



    export async function getTokenAPI({userEmail, userPassword}) {
      

      const Response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
      method: "POST",
      
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
      headers: {
        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
        "content-type": "application/json",
      },
    })
      
    const data = await Response.json();
    console.log(`getTokenAPI ${data.access}`);
    return data;
    }


    
    export async function getFavoriteTracks(userAccessToken) {
      const accessToken = userAccessToken;

      const Response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
      method: "GET",
      
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await Response;
    // const data = await Response.json();
    // console.log(`getFavoriteTracks ${JSON.stringify(data)}`);
    return data;
    }


    // https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/

    export async function likeTrackApi(userAccessToken, trackId) {
      const accessToken = userAccessToken;

      const Response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`, {
      method: "POST",
      
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await Response;
    // const data = await Response.json();
    // console.log(`likedTracks ${JSON.stringify(data)}`);
    return data;
    }

    export async function deleteLikeTrackApi(userAccessToken, trackId) {
      const accessToken = userAccessToken;

      const Response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}/favorite/`, {
      method: "DELETE",
      
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await Response;
    // const data = await Response.json();
    // console.log(`likedTracks ${JSON.stringify(data)}`);
    return data;
    }