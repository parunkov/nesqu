import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import AuthService from '@/api/auth'
import client from '@/http/client.ts'
import type { AuthToken, User } from '@/types/user'
import { requestWrapper } from '@/utils/requestWrapper'
import Cookies from 'js-cookie'

const AUTH_COOKIE = 'auth_token'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const isLoading = ref(true)
  const authService = new AuthService()
  const user = ref<User | null>(null)

  function loadToken() {
    const storedToken = Cookies.get(AUTH_COOKIE)
    if (storedToken) {
      token.value = storedToken
      client.addHeaders({
        Authorization: `Bearer ${token.value}`,
      })
    }
    isLoading.value = false
  }

  function updateToken(tokenData: AuthToken) {
    token.value = tokenData.access_token
    Cookies.set(AUTH_COOKIE, token.value)
    client.addHeaders({
      Authorization: `Bearer ${token.value}`,
    })
  }

  function deleteToken() {
    token.value = null
    Cookies.remove(AUTH_COOKIE)
    Cookies.remove(AUTH_COOKIE, { path: '/', domain: '.nesqu123.site' })

    client.removeHeaders(['Authorization'])
  }

  function login(email: string, password: string) {
    isLoading.value = true
    user.value = {
      id: 0,
      name: 'mail@mail.mail',
      role: 'user',
    }
    isLoading.value = false
    return true
    return requestWrapper(isLoading, () => authService.login(email, password)).then((data) => {
      updateToken(data)
      return true
    })
  }

  function logout() {
    user.value = null
    deleteToken()
  }

  onMounted(() => {
    loadToken()
  })

  return { isLoading, login, logout, user }
})
