const userData = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://614cd82ee3cf1f001712cf60.mockapi.io/users");
  xhr.responseType = "json";
  xhr.onload = () => {
    const user = xhr.response;
    // console.log(xhr.response);

    //Iterate for-each
    Object.entries(user).forEach((entry) => {
      const [key, value] = entry;
      console.log(value);
    });

    //Iterate for-in
    for (let key in user) {
      console.log(key);
    }

    //Iterate for-of
    for (let index of user) {
      console.log(index["name"]);
    }

    //Iterate for-loop
    for (i = 0; i < user.length; i++) {
      var gmail = user[i].gmail;
      console.log(gmail);
    }
  };
  xhr.send();
};
userData();
