let urlLocation = window.location.href
let currentUrl = new URL(urlLocation)
let id = currentUrl.searchParams.get("id:")


console.log(id)