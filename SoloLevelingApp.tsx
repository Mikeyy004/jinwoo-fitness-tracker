"use client"

import type React from "react"
import { useState, useEffect } from "react"

// Quotes Component
const quotes: string[] = [
  // Solo Leveling specific quotes
  "I don't have any talent. I've just had more practice.",
  "Arise.",
  "The world isn't fair. Only the strong survive.",
  "Fear is just a feeling. You can overcome it.",
  "I will show you what it means to be the strongest.",

  // General self-improvement quotes
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot, but make it hot by striking.",
  "Act as if what you do makes a difference. It does.",
  "Dream big. Start small. Act now.",
  "What we fear doing most is usually what we most need to do.",
  "The only person you are destined to become is the person you decide to be.",
  "The best way to predict the future is to create it.",
  "You are never too old to set another goal or to dream a new dream.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not in what you have, but who you are.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Your time is limited, don't waste it living someone else's life.",
  "The secret of getting ahead is getting started.",
  "The best revenge is massive success.",
  "I find that the harder I work, the more luck I seem to have.",
  "Opportunities don't happen. You create them.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The way to get started is to quit talking and begin doing.",
  "If you're going through hell, keep going.",
  "Don't be afraid to give up the good to go for the great.",
  "Do what you can, with what you have, where you are.",
  "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
  "You miss 100% of the shots you don't take.",
  "The only place where success comes before work is in the dictionary.",
  "Don't let yesterday take up too much of today.",
  "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
  "If you really look closely, most overnight successes took a long time.",
  "The secret of change is to focus all of your energy, not on fighting the old, but on building the new.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "The difference between ordinary and extraordinary is that little extra.",
  "The best way to predict your future is to create it.",
  "If you want to achieve greatness stop asking for permission.",
  "Things work out best for those who make the best of how things work out.",
  "To live a creative life, we must lose our fear of being wrong.",
  "If you are not willing to risk the usual you will have to settle for the ordinary.",
  "Trust because you are willing to accept the risk, not because it's safe or certain.",
  "All our dreams can come true if we have the courage to pursue them.",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "If you do what you always did, you will get what you always got.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
  "Successful entrepreneurs are givers and not takers of positive energy.",
  "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
  "Opportunities don't happen, you create them.",
  "Try not to become a person of success, but rather try to become a person of value.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "If you don't value your time, neither will others. Stop giving away your time and talents--start charging for it.",
  "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
  "No one can make you feel inferior without your consent.",
  "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
  "If you're going through hell keep going.",
  "The ones who are crazy enough to think they can change the world, are the ones who do.",
  "Don't raise your voice, improve your argument.",
  "What seems to us as bitter trials are often blessings in disguise.",
  "The meaning of life is to find your gift. The purpose of life is to give it away.",
  "The distance between insanity and genius is measured only by success.",
  "When you stop chasing the wrong things, you give the right things a chance to catch you.",
  "I believe that the only courage anybody ever needs is the courage to follow your own dreams.",
  "No masterpiece was ever created by a lazy artist.",
  "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
  "If you can't explain it simply, you don't understand it well enough.",
  "Blessed are those who can give without remembering and take without forgetting.",
  "Do one thing every day that scares you.",
  "What's the point of being alive if you don't at least try to do something remarkable.",
  "Life is not about finding yourself. Life is about creating yourself.",
  "Nothing in the world is more common than unsuccessful people with talent.",
  "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
  "Your problem isn't the problem. Your reaction is the problem.",
  "You can do anything, but not everything.",
  "Innovation distinguishes between a leader and a follower.",
  "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
  "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
  "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
  "It's not what you look at that matters, it's what you see.",
  "The road to success and the road to failure are almost exactly the same.",
  "The function of leadership is to produce more leaders, not more followers.",
  "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
  "The number one reason people fail in life is because they listen to their friends, family, and neighbors.",
  "The reason most people never reach their goals is that they don't define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.",
  "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.",
  "Success does not consist in never making mistakes but in never making the same one a second time.",
  "I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
  "You must expect great things of yourself before you can do them.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "People rarely succeed unless they have fun in what they are doing.",
  "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
  "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.",
  "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
  "A goal is not always meant to be reached; it often serves simply as something to aim at.",
  "Success is ... knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
  "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
]

// Training Tracker Component
interface Task {
  name: string
  max: number
  icon: string
}

const tasks: Task[] = [
  { name: "Push-ups", max: 100, icon: "💪" },
  { name: "Sit-ups", max: 100, icon: "🦾" },
  { name: "Squats", max: 100, icon: "🦵" },
  { name: "Run (km)", max: 10, icon: "🏃" },
]

const SoloLevelingApp: React.FC = () => {
  const [quote, setQuote] = useState<string>("Click to awaken your next quest...")
  const [progress, setProgress] = useState<{ [key: string]: number }>(() => {
    const savedProgress = localStorage.getItem("jinwooProgress")
    return savedProgress
      ? JSON.parse(savedProgress)
      : {
          "Push-ups": 0,
          "Sit-ups": 0,
          Squats: 0,
          "Run (km)": 0,
        }
  })

  useEffect(() => {
    localStorage.setItem("jinwooProgress", JSON.stringify(progress))
  }, [progress])

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  const handleIncrement = (task: string) => {
    setProgress((prev) => ({
      ...prev,
      [task]: Math.min(prev[task] + 1, tasks.find((t) => t.name === task)!.max),
    }))
  }

  const handleReset = () => {
    setProgress({
      "Push-ups": 0,
      "Sit-ups": 0,
      Squats: 0,
      "Run (km)": 0,
    })
  }

  const totalProgress = Object.values(progress).reduce((sum, value) => sum + value, 0)
  const totalMax = tasks.reduce((sum, task) => sum + task.max, 0)
  const overallProgress = (totalProgress / totalMax) * 100

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#e0e0e0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Quotes Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "0 0 10px #007bff",
          }}
        >
          ⚡ Solo Leveling Quotes ⚡
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            marginBottom: "2rem",
            maxWidth: "80%",
            lineHeight: "1.5",
          }}
        >
          "{quote}"
        </p>
        <button
          onClick={generateQuote}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            boxShadow: "0 0 15px #007bff",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#0056b3"
            e.currentTarget.style.boxShadow = "0 0 25px #007bff"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#007bff"
            e.currentTarget.style.boxShadow = "0 0 15px #007bff"
          }}
        >
          Level Up
        </button>
      </div>

      {/* Training Tracker Section */}
      <div
        style={{
          width: "90%",
          maxWidth: "500px",
          backgroundColor: "#1e1e1e",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 20px rgba(0, 123, 255, 0.3)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            textShadow: "0 0 10px #007bff",
          }}
        >
          🏋️‍♂️ Jin-Woo's Daily Training Tracker
        </h2>
        {tasks.map((task) => (
          <div key={task.name} style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "18px", marginBottom: "5px" }}>
              {task.icon} {task.name}: {progress[task.name]} / {task.max}
            </p>
            <div
              style={{
                backgroundColor: "#2c2c2c",
                height: "15px",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(progress[task.name] / task.max) * 100}%`,
                  height: "100%",
                  backgroundColor: "#007bff",
                  transition: "width 0.3s ease-in-out",
                }}
              />
            </div>
            <button
              onClick={() => handleIncrement(task.name)}
              style={{
                marginTop: "10px",
                padding: "8px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
            >
              +1 {task.name}
            </button>
          </div>
        ))}
        <div style={{ marginTop: "30px" }}>
          <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
            Overall Progress: {overallProgress.toFixed(2)}%
          </p>
          <div
            style={{
              backgroundColor: "#2c2c2c",
              height: "20px",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${overallProgress}%`,
                height: "100%",
                backgroundColor: "#00ff00",
                transition: "width 0.3s ease-in-out",
              }}
            />
          </div>
        </div>
        <button
          onClick={handleReset}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c82333")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc3545")}
        >
          Reset Progress
        </button>
      </div>
    </div>
  )
}

export default SoloLevelingApp

