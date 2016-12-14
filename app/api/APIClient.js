export default class APIClient {

  createFormBody(email, password) {
    const body = {
      'email': email,
      'password': password,
    }

    var formBody = []
    for (var property in body) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(body[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }
    formBody = formBody.join("&")

    console.log(formBody)

    return formBody
  }

  loginAPICall = (email, password) => (
    fetch('https://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: this.createFormBody(email, password)
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error)
    })
  )

  fetchUserDetailsAPI = (email) => {
    fetch(`http://localhost:3000/public_api/users/${email}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error)
    })
  }

}
