import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function maskPhone(phone: string) {
  const digits = phone.replace(/\D/g, "")
  if (digits.length < 4) return "****"
  return `*** *** ${digits.slice(-4)}`
}

export function formatPhoneE164(phone: string) {
  const digits = phone.replace(/\D/g, "")
  if (digits.startsWith("968")) return digits
  if (digits.startsWith("0")) return `968${digits.slice(1)}`
  return digits
}
