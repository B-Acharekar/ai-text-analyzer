import React from 'react'
import SentimentGauge from './SentimentGauge'
import DataStream from './DataStream'
import KeyPoints from './KeyPoints'

const InsightGrid = ({ analysis }) => {
  if (!analysis) return null

  return (
    <div className="insight-container mt-4">
      {/* Grid Header Decoration */}
      <div className="d-flex align-items-center gap-3 mb-4 fade-in">
        <div className="h-line flex-grow-1"></div>
        <div className="font-mono x-small text-accent-cyan fw-bold" style={{ letterSpacing: '0.4em' }}>
          DIAGNOSTIC_RESULTS_0x8F
        </div>
        <div className="h-line flex-grow-1"></div>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Module 01: Sentiment Analysis */}
        <div className="col-lg-4 col-md-6 stagger-1">
          <div className="module-label">MOD_01 // EMOTION_ENGINE</div>
          <SentimentGauge 
            score={analysis.score} 
            label={analysis.sentiment} 
          />
        </div>
        
        {/* Module 02: Neural Summarization */}
        <div className="col-lg-4 col-md-6 stagger-2">
          <div className="module-label">MOD_02 // NEURAL_STREAM</div>
          <DataStream text={analysis.summary} />
        </div>
        
        {/* Module 03: Key Points Extraction */}
        <div className="col-lg-4 col-md-12 stagger-3">
          <div className="module-label">MOD_03 // DATA_EXTRACTS</div>
          <KeyPoints points={analysis.key_points} />
        </div>
      </div>

      <style>{`
        .insight-container {
          position: relative;
        }

        .h-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--panel-border), transparent);
        }

        .module-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-bottom: 8px;
          padding-left: 10px;
          border-left: 2px solid var(--neon-cyan);
          letter-spacing: 1px;
        }

        /* Staggered Entry Animations */
        .stagger-1 { animation: slideUpFade 0.4s ease forwards 0.1s; opacity: 0; }
        .stagger-2 { animation: slideUpFade 0.4s ease forwards 0.2s; opacity: 0; }
        .stagger-3 { animation: slideUpFade 0.4s ease forwards 0.3s; opacity: 0; }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default InsightGrid