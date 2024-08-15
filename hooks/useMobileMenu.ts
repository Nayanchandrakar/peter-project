"use client"

import { create } from "zustand"

interface useMobieMenuInterface {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const useMobieMenu = create<useMobieMenuInterface>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),
}))
