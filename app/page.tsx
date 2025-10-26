
"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100 opacity-50 blur-3xl dark:bg-blue-900/20"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100 opacity-50 blur-3xl dark:bg-purple-900/20"></div>
      </div>

      {/* Main Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Avatar/Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="h-full w-full rounded-full bg-zinc-50 dark:bg-black"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-green-500 p-1">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:text-6xl"
          >
            John{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Doe
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl">
              Full-Stack Developer & UI/UX Enthusiast
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto mb-12 max-w-2xl"
          >
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              I create beautiful, functional, and user-centered digital experiences. 
              With a passion for clean code and innovative design, I bring ideas to life 
              through modern web technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-3 font-medium text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>Get In Touch</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mx-auto grid max-w-md grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                50+
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                3+
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Years Exp
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                100%
              </div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">
                Satisfaction
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600"
            >
              <span className="text-sm">Scroll down</span>
              <ArrowDownIcon className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute left-10 top-1/4 h-2 w-2 rounded-full bg-blue-500"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-20 top-1/3 h-3 w-3 rounded-full bg-purple-500"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/4 h-2 w-2 rounded-full bg-green-500"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </div>
    </div>
  );
}