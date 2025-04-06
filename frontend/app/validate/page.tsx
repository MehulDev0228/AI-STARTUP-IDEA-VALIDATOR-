"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Loader2, Sparkles, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export default function ValidatePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    ideaTitle: "",
    ideaDescription: "",
    targetMarket: "",
    valueProposition: "",
    competitors: "",
  })
  const [activeField, setActiveField] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/validate/results")
    }, 2000)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent" />
      </div>

      <div className="container max-w-4xl py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link href="/" className="flex items-center text-sm text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
          <div className="relative p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                  Validate Your Startup Idea
                </h1>
                <p className="text-white/60 text-sm">
                  Provide details about your concept to receive AI-powered insights
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className={`space-y-2 relative ${activeField === "ideaTitle" ? "z-10" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Label htmlFor="ideaTitle" className="text-white">
                  Idea Title
                </Label>
                {activeField === "ideaTitle" && (
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
                )}
                <Input
                  id="ideaTitle"
                  name="ideaTitle"
                  placeholder="Give your startup idea a name"
                  value={formData.ideaTitle}
                  onChange={handleChange}
                  onFocus={() => handleFocus("ideaTitle")}
                  onBlur={handleBlur}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 transition-all"
                />
              </motion.div>

              <motion.div
                className={`space-y-2 relative ${activeField === "ideaDescription" ? "z-10" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Label htmlFor="ideaDescription" className="text-white">
                  Idea Description
                </Label>
                {activeField === "ideaDescription" && (
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
                )}
                <Textarea
                  id="ideaDescription"
                  name="ideaDescription"
                  placeholder="Describe your startup idea in detail"
                  rows={5}
                  value={formData.ideaDescription}
                  onChange={handleChange}
                  onFocus={() => handleFocus("ideaDescription")}
                  onBlur={handleBlur}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 transition-all"
                />
              </motion.div>

              <motion.div
                className={`space-y-2 relative ${activeField === "targetMarket" ? "z-10" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Label htmlFor="targetMarket" className="text-white">
                  Target Market
                </Label>
                {activeField === "targetMarket" && (
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
                )}
                <Textarea
                  id="targetMarket"
                  name="targetMarket"
                  placeholder="Who are your target customers?"
                  rows={3}
                  value={formData.targetMarket}
                  onChange={handleChange}
                  onFocus={() => handleFocus("targetMarket")}
                  onBlur={handleBlur}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 transition-all"
                />
              </motion.div>

              <motion.div
                className={`space-y-2 relative ${activeField === "valueProposition" ? "z-10" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Label htmlFor="valueProposition" className="text-white">
                  Value Proposition
                </Label>
                {activeField === "valueProposition" && (
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
                )}
                <Textarea
                  id="valueProposition"
                  name="valueProposition"
                  placeholder="What unique value does your idea provide?"
                  rows={3}
                  value={formData.valueProposition}
                  onChange={handleChange}
                  onFocus={() => handleFocus("valueProposition")}
                  onBlur={handleBlur}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 transition-all"
                />
              </motion.div>

              <motion.div
                className={`space-y-2 relative ${activeField === "competitors" ? "z-10" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label htmlFor="competitors" className="text-white">
                  Competitors
                </Label>
                {activeField === "competitors" && (
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-sm"></div>
                )}
                <Textarea
                  id="competitors"
                  name="competitors"
                  placeholder="List any existing competitors or similar solutions"
                  rows={3}
                  value={formData.competitors}
                  onChange={handleChange}
                  onFocus={() => handleFocus("competitors")}
                  onBlur={handleBlur}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 text-white h-12 mt-4 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Validate My Idea
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

