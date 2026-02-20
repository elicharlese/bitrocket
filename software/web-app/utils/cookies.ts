type CookieOptions = {
  maxAge?: number
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: "strict" | "lax" | "none"
}

export function setCookie(name: string, value: string, options: CookieOptions = {}) {
  const { maxAge, path = "/", domain, secure, sameSite = "lax" } = options

  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  if (maxAge !== undefined) {
    cookie += `; Max-Age=${maxAge}`
  }

  if (domain) {
    cookie += `; Domain=${domain}`
  }

  if (path) {
    cookie += `; Path=${path}`
  }

  if (secure) {
    cookie += "; Secure"
  }

  if (sameSite) {
    cookie += `; SameSite=${sameSite}`
  }

  document.cookie = cookie
}

export function getCookie(name: string): string | undefined {
  const cookies = document.cookie.split("; ")
  const cookie = cookies.find((c) => c.startsWith(`${encodeURIComponent(name)}=`))

  if (!cookie) {
    return undefined
  }

  return decodeURIComponent(cookie.split("=")[1])
}

export function deleteCookie(name: string, path = "/") {
  document.cookie = `${encodeURIComponent(name)}=; Path=${path}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}
