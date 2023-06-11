'use client'

import { useState } from 'react'

export const useDrawer = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  const openDrawer = () => {
    setIsOpen(true)
  }

  return {
    isOpen,
    toggleDrawer,
    closeDrawer,
    openDrawer,
  }
}
