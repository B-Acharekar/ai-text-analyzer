import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Activity, Cpu, Lock } from 'lucide-react'

const SystemStatusBar = ({ mode = 'SYSTEM_CORE' }) => {
  return (
    <header className="hud-header-bar px-4 py-2 d-flex align-items-center justify-content-between position-sticky top-0 z-3">
      {/* LEFT: Branding & Mode */}
      <div className="d-flex align-items-center gap-4">
        <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 group">
          <div className="status-icon-box">
            <ShieldCheck size={14} className="icon-main" />
            <div className="icon-glow"></div>
          </div>
          <div className="brand-text d-none d-md-flex flex-column">
            <span className="font-orbitron fw-bold lh-1" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>NEURAL_CORE_V1</span>
            <span className="font-mono text-muted" style={{ fontSize: '0.55rem' }}>BUILD_4.5_STABLE</span>
          </div>
        </Link>
        
        <div className="v-divider"></div>

        <div className="d-flex align-items-center gap-2 font-mono x-small">
          <Cpu size={12} className="text-accent-cyan pulse-icon" />
          <span className="text-muted opacity-50">MODE:</span>
          <span className="text-accent-cyan fw-bold">{mode}</span>
        </div>
      </div>

      {/* RIGHT: Real-time Stats */}
      <div className="d-flex align-items-center gap-4 font-mono x-small">
        <div className="d-flex align-items-center gap-2 status-pill">
          <Activity size={12} className="text-accent-lime" />
          <span className="text-muted">UPLINK:</span>
          <span className="text-accent-lime fw-bold blink-text">STABLE</span>
        </div>
        
        <div className="d-none d-lg-flex align-items-center gap-2 status-pill">
          <Lock size={12} className="text-accent-magenta" />
          <span className="text-muted">ENC:</span>
          <span className="text-accent-magenta fw-bold">AES_256</span>
        </div>

        <div className="system-time d-none d-sm-block">
          <span className="text-white opacity-75">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </div>
      </div>

      <style>{`
        .hud-header-bar {
          background: rgba(2, 2, 5, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--panel-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          height: 50px;
        }

        .status-icon-box {
          position: relative;
          width: 26px;
          height: 26px;
          background: var(--neon-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
        }

        .icon-main {
          color: var(--bg-dark);
          z-index: 2;
        }

        .icon-glow {
          position: absolute;
          inset: 0;
          background: var(--neon-cyan);
          filter: blur(8px);
          opacity: 0.5;
        }

        .v-divider {
          width: 1px;
          height: 20px;
          background: var(--panel-border);
        }

        .status-pill {
          padding: 2px 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .blink-text {
          animation: text-blink 2s infinite;
        }

        .pulse-icon {
          animation: pulse-simple 1.5s infinite;
        }

        @keyframes text-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @keyframes pulse-simple {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        .system-time {
          border-left: 2px solid var(--neon-cyan);
          padding-left: 10px;
          min-width: 80px;
        }
      `}</style>
    </header>
  )
}

export default SystemStatusBar