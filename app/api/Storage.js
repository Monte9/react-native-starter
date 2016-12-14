import { AsyncStorage } from 'react-native'

const TOKEN_KEY = '@ReactNativeStarter:token'

export const clearToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY)
}

export const setToken = async (token) => {
  await AsyncStorage.setItem(TOKEN_KEY, token)
}

export const getToken = async () => await AsyncStorage.getItem(TOKEN_KEY)
