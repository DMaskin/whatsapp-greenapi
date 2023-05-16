import axios from "axios"

const BASE_URL = process.env.REACT_APP_URL

async function sendMessage(idInstance: string, apiTokenInstance: string, message: string, chatId: string) {
  const body = {
    chatId: `${chatId}@c.us`,
    message: message,
  }

  const { data } = await axios.post(`${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, body, {
    headers: { "Content-Type": "application/json" },
  })
  return data
}

async function receiveNotification(idInstance: string, apiTokenInstance: string) {
  const { data } = await axios.get(`${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`)
  return data
}

async function deleteNotification(idInstance: string, apiTokenInstance: string, id: string) {
  setTimeout(async () => {
    await axios.delete(`${BASE_URL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${id}`)
  }, 100)
}

export async function sendMessageFlow(idInstance: string, apiTokenInstance: string, message: string, chatId: string) {
  await sendMessage(idInstance, apiTokenInstance, message, chatId)
  const data = await receiveNotification(idInstance, apiTokenInstance)
  await deleteNotification(idInstance, apiTokenInstance, data.receiptId)
  return data.body.messageData.extendedTextMessageData.text
}
