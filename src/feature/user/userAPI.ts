interface ICredentials {
  idInstance: string
  apiTokenInstance: string
}

export function login(credentials: ICredentials) {
  return new Promise<ICredentials>((resolve) => {
    setTimeout(() => {
      const { idInstance, apiTokenInstance } = credentials
      localStorage.setItem("auth", "true")
      localStorage.setItem("idInstance", idInstance)
      localStorage.setItem("apiTokenInstance", apiTokenInstance)
      resolve({ idInstance, apiTokenInstance })
    }, 500)
  })
}

export function logout() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      localStorage.removeItem("auth")
      localStorage.removeItem("idInstance")
      localStorage.removeItem("apiTokenInstance")
      resolve()
    }, 500)
  })
}

export function checkAuth() {
  const isAuth = !!localStorage.getItem("auth") ?? false
  const idInstance = localStorage.getItem("idInstance") ?? "none-idInstance"
  const apiTokenInstance = localStorage.getItem("apiTokenInstance") ?? "none-apiTokenInstance"
  return { isAuth, idInstance, apiTokenInstance }
}
