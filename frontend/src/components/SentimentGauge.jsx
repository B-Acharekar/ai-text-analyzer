import React, { useEffect, useState } from 'react'
import { Activity, ShieldAlert } from 'lucide-react'

const SentimentGauge = ({ score = 0, label = 'NEUTRAL' }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  
  // Trigger animation on mount/update
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(normalizedScore), 200);
    return () => clearTimeout(timer);
  }, [normalizedScore]);

  const offset = circumference - (animatedScore / 100) * circumference;
  
  const getTheme = (lbl) => {
    const status = lbl?.toUpperCase();
    if (status.includes('POS')) return { color: 'var(--neon-lime)', glow: 'rgba(173, 255, 0, 0.4)' };
    if (status.includes('NEG')) return { color: 'var(--neon-red)', glow: 'rgba(255, 0, 85, 0.4)' };
    return { color: 'var(--neon-cyan)', glow: 'rgba(0, 242, 255, 0.4)' };
  };

  const theme = getTheme(label);

  return (
    <div className="card-cyber h-100 d-flex flex-column align-items-center justify-content-between p-0 overflow-hidden animate-slide-up"
         style={{ borderTopWidth: '4px', borderColor: theme.color }}>
      
      {/* HUD Header */}
      <div className="w-100 px-4 py-3 border-bottom border-secondary border-opacity-10 d-flex align-items-center justify-content-between"
           style={{ background: `linear-gradient(180deg, ${theme.glow.replace('0.4', '0.1')} 0%, transparent 100%)` }}>
        <div className="d-flex align-items-center gap-2">
          <Activity size={16} style={{ color: theme.color }} className="pulse" />
          <span className="font-mono small fw-bold" style={{ color: 'var(--text-primary)', letterSpacing: '0.2em' }}>
            [ EMOTION_CORE_v2.0 ]
          </span>
        </div>
        <ShieldAlert size={14} style={{ color: theme.color, opacity: 0.6 }} />
      </div>

      {/* Main Gauge UI */}
      <div className="position-relative my-4 d-flex align-items-center justify-content-center" style={{ width: '180px', height: '180px' }}>
        
        {/* Decorative Rotating Ring */}
        <div className="position-absolute w-100 h-100 ring-deco" style={{ border: `1px dashed ${theme.color}`, opacity: 0.2, borderRadius: '50%' }}></div>
        
        <svg viewBox="0 0 140 140" className="w-100 h-100 shadow-svg" style={{ transform: 'rotate(-90deg)' }}>
          {/* Background Track with Notch Pattern */}
          <circle
            cx="70" cy="70" r={radius}
            fill="transparent"
            stroke="var(--panel-border)"
            strokeWidth="10"
            strokeDasharray="2, 2"
          />
          
          {/* Main Progress Bar */}
          <circle
            cx="70" cy="70" r={radius}
            fill="transparent"
            stroke={theme.color}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="butt"
            style={{ 
              transition: 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: `drop-shadow(0 0 12px ${theme.color})`
            }}
          />
        </svg>

        {/* Center Readout */}
        <div className="position-absolute text-center">
          <div className="font-orbitron display-6 fw-900 m-0" style={{ color: 'var(--text-primary)', textShadow: `0 0 10px ${theme.glow}` }}>
            {Math.round(animatedScore)}
          </div>
          <div className="font-mono x-small opacity-50 text-uppercase" style={{ letterSpacing: '2px' }}>Index_Val</div>
        </div>
      </div>

      {/* Footer Classification */}
      <div className="w-100 px-4 py-3 border-top border-secondary border-opacity-10" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
        <div className="font-orbitron fw-bold text-center" style={{ color: theme.color, fontSize: '1.1rem', letterSpacing: '0.15em' }}>
           {label}_STATE_DETECTED
        </div>
        <div className="d-flex justify-content-between mt-2 font-mono x-small opacity-50">
          <span>CONFIDENCE: 0.99</span>
          <span>S_TYPE: AXON_04</span>
        </div>
      </div>

      <style>{`
        .ring-deco {
          animation: spin 10s linear infinite;
        }
        .shadow-svg {
          filter: drop-shadow(0 0 20px rgba(0,0,0,0.5));
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .pulse {
          animation: pulse-glow 2s infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; filter: brightness(1); }
          50% { opacity: 0.7; filter: brightness(1.5); }
        }
      `}</style>
    </div>
  )
}

export default SentimentGauge