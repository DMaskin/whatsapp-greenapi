import axios from "axios"

const BASE_URL = process.env.REACT_APP_URL

export async function sendMessage(idInstance: string, apiTokenInstance: string, message: string, chatId: string) {
  const body = {
    chatId: `${chatId}@c.us`,
    message: message
  }

  const { data } = await axios.post(`${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body, {
    headers: { "Content-Type": "application/json" }
  })
  console.log("Send message: " + message + " | response: " + data)
  return data
}

async function receiveNotification(idInstance: string, apiTokenInstance: string) {
  const { data } = await axios.get(`${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
  console.log("Receive Notification: " + data.body.messageData.text + " | receiptId: " + data.receiptId)
  return data
}

async function deleteNotification(idInstance: string, apiTokenInstance: string, id: string) {
  const { data } = await axios.delete(`${BASE_URL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${id}`)
  console.log("Delete Notification: result = " + data.result)
}

export async function sendMessageFlow(idInstance: string, apiTokenInstance: string, message: string, chatId: string) {
  await sendMessage(idInstance, apiTokenInstance, message, chatId)
  const data = await receiveNotification(idInstance, apiTokenInstance)
  await deleteNotification(idInstance, apiTokenInstance, data.receiptId)
  await deleteNotification(idInstance, apiTokenInstance, data.receiptId + 1)
  return data.body.messageData.text
}