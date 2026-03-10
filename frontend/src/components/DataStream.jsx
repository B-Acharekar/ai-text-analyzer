import React from 'react';
import { Layout, Share2 } from 'lucide-react';

const DataStream = ({ text = '' }) => {
  return (
    <div className="card-cyber h-100 p-0 border-accent-purple d-flex flex-column animate-slide-up" 
         style={{ 
           minHeight: '340px', 
           boxShadow: 'inset 0 0 20px rgba(157, 0, 255, 0.05)',
           borderLeftWidth: '4px' 
         }}>
      
      {/* Header with Decorative Brackets */}
      <div className="px-4 py-3 border-bottom border-secondary border-opacity-10 d-flex align-items-center justify-content-between" 
           style={{ background: 'linear-gradient(90deg, rgba(157, 0, 255, 0.1) 0%, transparent 100%)' }}>
        <div className="d-flex align-items-center gap-2">
          <Layout size={16} className="text-accent-purple" />
          <span className="font-mono small fw-bold text-primary" style={{ letterSpacing: '0.2em' }}>
            [ NEURAL_SUMMARIZATION ]
          </span>
        </div>
        <Share2 size={14} className="text-muted cursor-pointer hover-bright" />
      </div>
      
      {/* Content Area */}
      <div className="p-4 flex-grow-1 overflow-auto custom-scrollbar" style={{ maxHeight: '280px' }}>
        {text ? (
          <div className="font-inter text-secondary data-text-flow" 
               style={{ lineHeight: '1.8', fontSize: '0.95rem', textAlign: 'left' }}>
            <span className="text-accent-purple fw-bold mr-2">{">"}</span> {text}
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center h-100 opacity-20">
            <div className="terminal-loader mb-2"></div>
            <span className="font-mono x-small">AWAITING_UPLINK...</span>
          </div>
        )}
      </div>

      {/* Footer / Meta Info */}
      <div className="mt-auto px-4 py-2 border-top border-secondary border-opacity-10" 
           style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
         <div className="d-flex align-items-center justify-content-between font-mono" style={{ fontSize: '0.65rem' }}>
            <div className="d-flex gap-3">
              <span className="text-muted">TOKENS: <span className="text-white">{text ? text.split(' ').length : 0}</span></span>
              <span className="text-muted">ENC: <span className="text-white">UTF-8</span></span>
            </div>
            <span className="text-accent-purple text-glow-purple">● LIVE_FEED</span>
         </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--neon-purple);
          box-shadow: 0 0 5px var(--neon-purple);
        }
        .text-glow-purple {
          text-shadow: 0 0 5px var(--neon-purple);
        }
        .data-text-flow {
          animation: textReveal 0.5s ease-out;
        }
        @keyframes textReveal {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .terminal-loader {
          width: 20px;
          height: 4px;
          background: var(--neon-purple);
          animation: terminal-blink 1s infinite;
        }
        @keyframes terminal-blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .hover-bright:hover {
          color: white !important;
          filter: drop-shadow(0 0 5px white);
        }
        .animate-slide-up {
          animation: slideUp 0.4s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DataStream;