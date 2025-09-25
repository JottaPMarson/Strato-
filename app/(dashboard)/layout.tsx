"use client"

import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { AssistenteVirtual } from "@/components/assistente-virtual"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Evitar problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handler global para fechar/destravar overlays em caso de travamento
  useEffect(() => {
    function handleGlobalEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return

      // 1) Fechar/remover overlays de preview/export (se existirem)
      const overlays = document.querySelectorAll<HTMLElement>(
        ".fixed.inset-0, .backdrop-blur-sm"
      )
      overlays.forEach((el) => {
        // Tenta ocultar sem desmontar nós React
        el.style.display = "none"
        el.style.pointerEvents = "none"
      })

      // 2) Reabilitar interações globais caso algum estilo tenha bloqueado
      document.body.style.pointerEvents = "auto"
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", handleGlobalEscape)
    return () => window.removeEventListener("keydown", handleGlobalEscape)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <motion.div className="p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            {children}
          </motion.div>
        </main>

        {/* Assistente Virtual */}
        <AssistenteVirtual />
      </div>
    </div>
  )
}
