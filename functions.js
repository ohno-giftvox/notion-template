async function postFetch(url,body){
  const headers = new Headers({ "Content-Type": "application/json" });
  console.log(body);
  return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers
  })
      .then((data) => {
          return data.json();
      })
      .catch((err) => {
          console.log(err);
      })
}

export {postFetch};