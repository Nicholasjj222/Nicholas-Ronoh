import { HttpClient } from "./httpClient"

type User = {
  id: number
  name: string
  email: string
}

const api = new HttpClient("https://jsonplaceholder.typicode.com")

async function run() {
  const users = await api.get<User[]>("/users", {
    cache: true,
    retries: 3
  })

  console.log(users)
}

run()