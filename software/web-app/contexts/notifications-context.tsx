"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

export type NotificationType = "info" | "success" | "warning" | "error"

export interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
  read: boolean
  timestamp: Date
}

interface NotificationsContextType {
  notifications: Notification[]
  unreadCount: number
  addNotification: (title: string, message: string, type: NotificationType) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  clearNotification: (id: string) => void
  clearAllNotifications: () => void
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined)

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  // Load notifications from localStorage on mount
  useEffect(() => {
    try {
      const savedNotifications = localStorage.getItem("notifications")
      if (savedNotifications) {
        const parsedNotifications = JSON.parse(savedNotifications).map((notification: any) => ({
          ...notification,
          timestamp: new Date(notification.timestamp),
        }))
        setNotifications(parsedNotifications)
      } else {
        // Add demo notifications if none exist
        const demoNotifications = [
          {
            id: uuidv4(),
            title: "Welcome to BitRocket",
            message: "Explore the app to discover all features and capabilities.",
            type: "info" as NotificationType,
            read: false,
            timestamp: new Date(),
          },
          {
            id: uuidv4(),
            title: "Charging session completed",
            message: "Your vehicle is now charged to 80%. You earned 2.5 BRT tokens.",
            type: "success" as NotificationType,
            read: false,
            timestamp: new Date(Date.now() - 3600000), // 1 hour ago
          },
          {
            id: uuidv4(),
            title: "New charging station nearby",
            message: "A new BitRocket charging station is now available 2 miles from your location.",
            type: "info" as NotificationType,
            read: true,
            timestamp: new Date(Date.now() - 86400000), // 1 day ago
          },
        ]
        setNotifications(demoNotifications)
      }
    } catch (error) {
      console.error("Error loading notifications:", error)
    }
  }, [])

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("notifications", JSON.stringify(notifications))
    } catch (error) {
      console.error("Error saving notifications:", error)
    }
  }, [notifications])

  const unreadCount = notifications.filter((notification) => !notification.read).length

  const addNotification = (title: string, message: string, type: NotificationType) => {
    const newNotification: Notification = {
      id: uuidv4(),
      title,
      message,
      type,
      read: false,
      timestamp: new Date(),
    }
    setNotifications((prev) => [newNotification, ...prev])
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const clearNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAllNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationsContext)
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationsProvider")
  }
  return context
}
