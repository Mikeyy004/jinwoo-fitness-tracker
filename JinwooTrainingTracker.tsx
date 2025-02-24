"use client"

import type React from "react"
import { useState, useEffect } from "react"

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

const JinwooTrainingTracker: React.FC = () => {
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
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          marginBottom: "20px",
          textShadow: "0 0 10px #007bff",
        }}
      >
        🏋️‍♂️ Jin-Woo's Daily Training Tracker
      </h1>
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

export default JinwooTrainingTracker

