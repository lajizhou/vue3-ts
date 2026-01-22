// src/types/index.ts
export interface User {
  id: number
  username: string
  email: string
  avatar?: string
}

export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
  success: boolean
}