export type User = {
  id: number
  name: string
  role: "admin" | "instructor" | "student"
}