import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL

export async function sendMessage(idInstance: string, apiTokenInstance: string, message: string) {
  const { data } = await axios.post(`${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, message)
  console.log("Send message: " + message + " | response: " + data)
  return data
}

export async function receiveMessage(idInstance: string, apiTokenInstance: string) {
  const {data} = await axios.get(`${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
  console.log(data)
  return data
}