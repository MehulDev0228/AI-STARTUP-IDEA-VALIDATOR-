"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Download, ThumbsUp, AlertTriangle, ChevronLeft, Share2, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

export default function ResultsPage() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("strengths")

  // Refs for the chart animations
  const marketRef = useRef<HTMLDivElement>(null)
  const competitiveRef = useRef<HTMLDivElement>(null)
  const executionRef = useRef<HTMLDivElement>(null)
  const scalabilityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    // Simulate loading with progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!loading && mounted) {
      // Animate the chart values when loaded
      const animateValue = (ref: React.RefObject<HTMLDivElement>, targetValue: number) => {
        if (ref.current) {
          let startValue = 0
          const duration = 1500
          const increment = 1
          const stepTime = Math.abs(Math.floor(duration / targetValue))

          const timer = setInterval(() => {
            startValue += increment
            if (ref.current) {
              ref.current.style.width = `${startValue}%`
            }
            if (startValue >= targetValue) {
              clearInterval(timer)
            }
          }, stepTime)
        }
      }

      setTimeout(() => {
        animateValue(marketRef, 85)
        animateValue(competitiveRef, 72)
        animateValue(executionRef, 65)
        animateValue(scalabilityRef, 90)
      }, 300)
    }
  }, [loading, mounted])

  if (!mounted) return null

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Animated background gradient */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-600/10 via-transparent to-transparent" />
        </div>

        <div className="container max-w-4xl py-10 flex flex-col items-center justify-center min-h-[70vh] relative z-10">
          <div className="text-center space-y-6 w-full">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-t-transparent border-cyan-400 animate-spin"></div>
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Analyzing Your Idea
              </h2>
              <p className="text-white/60 mt-2">Our AI is processing your startup concept</p>
            </div>

            <div className="w-full max-w-md mx-auto mt-8">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/40">
                <span>Collecting data</span>
                <span>Generating insights</span>
                <span>Finalizing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
          <Link href="/validate" className="flex items-center text-sm text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Form
          </Link>
        </motion.div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Idea Validation Results
            </h1>
            <p className="text-white/60 mt-2">AI-powered analysis and feedback for your startup idea: "EcoDelivery"</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                  <ThumbsUp className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Overall Assessment</h2>
                  <p className="text-white/60 text-sm">Summary of your idea's potential based on our AI analysis</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex flex-col items-center text-center md:w-1/3">
                  <div className="relative w-36 h-36">
                    <svg className="w-36 h-36 -rotate-90" viewBox="0 0 100 100">
                      <circle
                        className="text-white/10 stroke-current"
                        strokeWidth="8"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="stroke-current text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                        style={{
                          strokeDasharray: `${78 * 2.51} ${100 * 2.51}`,
                          stroke: "url(#gradient)",
                        }}
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        78%
                      </span>
                      <span className="text-xs text-white/60">Viability Score</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-5 w-full">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">Market Potential</span>
                      <span className="text-sm font-medium text-cyan-400">85%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        ref={marketRef}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">Competitive Advantage</span>
                      <span className="text-sm font-medium text-cyan-400">72%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        ref={competitiveRef}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">Execution Complexity</span>
                      <span className="text-sm font-medium text-cyan-400">65%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        ref={executionRef}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-white">Scalability</span>
                      <span className="text-sm font-medium text-cyan-400">90%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        ref={scalabilityRef}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-lg bg-white/5 border border-white/10">
                <p className="font-medium mb-2 text-white">Executive Summary:</p>
                <p className="text-white/70">
                  Your eco-friendly delivery service concept shows strong market potential with growing demand for
                  sustainable logistics. The competitive advantage is good but could be strengthened. Implementation
                  complexity is moderate, requiring significant logistics infrastructure. The idea shows excellent
                  scalability potential across urban markets.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="strengths" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-white/5 p-1 rounded-lg">
                <TabsTrigger
                  value="strengths"
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white data-[state=active]:border-0 rounded-md transition-all duration-300 ${activeTab === "strengths" ? "text-white" : "text-white/60"}`}
                >
                  Strengths
                </TabsTrigger>
                <TabsTrigger
                  value="challenges"
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white data-[state=active]:border-0 rounded-md transition-all duration-300 ${activeTab === "challenges" ? "text-white" : "text-white/60"}`}
                >
                  Challenges
                </TabsTrigger>
                <TabsTrigger
                  value="recommendations"
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-white data-[state=active]:border-0 rounded-md transition-all duration-300 ${activeTab === "recommendations" ? "text-white" : "text-white/60"}`}
                >
                  Recommendations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="strengths" className="space-y-4 mt-2">
                <div className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20">
                        <ThumbsUp className="h-5 w-5 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Key Strengths</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Strong Market Timing",
                          description:
                            "The increasing focus on sustainability and carbon footprint reduction makes this an ideal time to enter the eco-friendly delivery market.",
                        },
                        {
                          title: "Dual Value Proposition",
                          description:
                            "Your service offers value to both environmentally conscious consumers and businesses looking to improve their sustainability credentials.",
                        },
                        {
                          title: "Scalable Business Model",
                          description:
                            "The hub-and-spoke model you've outlined can be efficiently replicated across different urban centers.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                          <h4 className="font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="challenges" className="space-y-4 mt-2">
                <div className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20">
                        <AlertTriangle className="h-5 w-5 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Potential Challenges</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "High Initial Investment",
                          description:
                            "The cost of electric vehicles, charging infrastructure, and logistics software will require significant upfront capital.",
                        },
                        {
                          title: "Established Competition",
                          description:
                            "Several major logistics companies are already investing in green delivery options, which could limit your market share potential.",
                        },
                        {
                          title: "Operational Complexity",
                          description:
                            "Managing a fleet of electric vehicles, optimizing routes, and maintaining charging infrastructure adds operational complexity.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all duration-300 group"
                        >
                          <h4 className="font-semibold mb-2 text-white group-hover:text-amber-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-4 mt-2">
                <div className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                        <ThumbsUp className="h-5 w-5 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">Strategic Recommendations</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Start with a Focused Niche",
                          description:
                            "Consider starting with a specific vertical (e.g., restaurant deliveries or retail partnerships) rather than competing broadly with established players.",
                        },
                        {
                          title: "Develop Technology Advantage",
                          description:
                            "Invest in proprietary route optimization and carbon tracking software to differentiate from competitors and provide additional value to business clients.",
                        },
                        {
                          title: "Consider Partnership Model",
                          description:
                            "Explore partnerships with existing delivery services to provide the eco-friendly component rather than building the entire infrastructure yourself.",
                        },
                        {
                          title: "Develop Clear Metrics",
                          description:
                            "Create transparent carbon savings metrics to help businesses quantify and market their environmental impact when using your service.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                          <h4 className="font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02]"></div>
            <div className="relative p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Market Analysis</h2>
                  <p className="text-white/60 text-sm">
                    Detailed breakdown of market conditions and competitive landscape
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-3 text-white">Market Size & Growth</h3>
                  <p className="text-white/70 mb-4">
                    The sustainable logistics market is projected to grow at a CAGR of 21.5% from 2023 to 2028, reaching
                    a value of $35.2 billion by 2028.
                  </p>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/40">
                    <span>Low Growth</span>
                    <span>High Growth</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-white">Competitive Landscape</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Direct Competitors",
                        content: "GreenMile, EcoExpress, Sustainery",
                      },
                      {
                        title: "Indirect Competitors",
                        content: "UPS, FedEx, Amazon (all with green initiatives)",
                      },
                      {
                        title: "Market Leaders",
                        content: "Traditional carriers with 85% market share",
                      },
                      {
                        title: "Emerging Players",
                        content: "Green startups with 15% and growing",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                      >
                        <p className="font-medium mb-1 text-white group-hover:text-purple-400 transition-colors duration-300">
                          {item.title}
                        </p>
                        <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-white">Customer Segments</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Eco-conscious consumers", value: 35 },
                      { name: "Sustainable businesses", value: 28 },
                      { name: "Corporate sustainability programs", value: 22 },
                      { name: "Government & public sector", value: 15 },
                    ].map((segment, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-white/70">{segment.name}</span>
                          <span className="text-sm font-medium text-purple-400">{segment.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                            style={{ width: `${segment.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-between gap-4"
          >
            <Link href="/validate">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 w-full sm:w-auto"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Refine Your Idea
              </Button>
            </Link>
            <div className="flex gap-3">
              <Button className="bg-white/10 hover:bg-white/20 text-white border-0 w-full sm:w-auto">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 text-white w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

