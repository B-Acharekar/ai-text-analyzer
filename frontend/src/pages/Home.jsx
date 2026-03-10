import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Terminal, Zap, Activity } from 'lucide-react';
import '../index.css';

const Home = () => {
  return (
    <div className="cyber-main-wrapper">
      {/* Background FX */}
      <div className="cyber-grid"></div>
      <div className="scanline"></div>

      <main className="hud-container">
        {/* Header Section */}
        <header className="hud-header">
          <div className="glitch-wrapper">
            <h1 className="cyber-glitch-text" data-text="NEURAL_ANALYZE_v4.5">
              NEURAL_ANALYZE_v4.5
            </h1>
          </div>
          <div className="system-status">
            <Activity size={14} className="pulse-icon" />
            <span className="terminal-font">UPLINK_ACTIVE // 12ms</span>
          </div>
        </header>

        {/* Central UI Core */}
        <section className="hud-core">
          <div className="topology-grid">
            <div className="node-wrapper cyan">
              <Cpu size={28} />
              <span className="node-text">REACT.UI</span>
              <div className="node-bar"></div>
            </div>
            <div className="node-connector"></div>
            <div className="node-wrapper magenta">
              <Terminal size={28} />
              <span className="node-text">FAST.API</span>
              <div className="node-bar"></div>
            </div>
            <div className="node-connector"></div>
            <div className="node-wrapper yellow">
              <Zap size={28} />
              <span className="node-text">GEMINI.2.5</span>
              <div className="node-bar"></div>
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">CONSOLE_OUTPUT</div>
            <div className="terminal-body">
              <p className="log-line"><span className="cyan-t">[OK]</span> CORE_KERNEL_INIT...</p>
              <p className="log-line"><span className="magenta-t">[OK]</span> NEURAL_NET_READY</p>
              <p className="log-line warning"><span className="yellow-t">[!]</span> SYNC_PENDING_USER_AUTH</p>
              <p className="log-line"><span className="cyan-t">[&gt;]</span> WAITING FOR UPLINK...</p>
            </div>
          </div>
        </section>

        {/* Action Zone */}
        <footer className="hud-footer">
          <Link to="/analyze" className="cyber-trigger">
            <span className="trigger-text">INITIALIZE_NEURAL_LINK</span>
            <span className="trigger-glitch"></span>
          </Link>
          <div className="dev-tag">
            <div className="tag-scanline"></div>
            <span className="tag-prefix">AUTH_OVRD //</span>
            <a
              href="https://github.com/B-Acharekar"
              target="_blank"
              rel="noopener noreferrer"
              className="goated-link"
              data-value="[B-Acharekar]"
            >
              [B-Acharekar]
            </a>
            <div className="status-dot"></div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;