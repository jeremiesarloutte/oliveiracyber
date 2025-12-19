import React from 'react'

export default function Home() {
  return (
    <div className="page">
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="bg-glow" aria-hidden="true"></div>
      <main className="hero-visual">
        <div className="image-frame">
          <img
            src="/img/en_construction.png"
            alt="Site en construction"
            className="hero-image"
          />
        </div>
      </main>
    </div>
  )
}
