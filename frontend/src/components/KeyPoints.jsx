import React from 'react'
import { Zap, ChevronRight, Target } from 'lucide-react'

const KeyPoints = ({ points = [] }) => {
  return (
    <div className="card-cyber h-100 p-0 border-accent-lime d-flex flex-column animate-slide-up" 
         style={{ 
           minHeight: '340px',
           borderRightWidth: '4px',
           boxShadow: 'inset 0 0 20px rgba(173, 255, 0, 0.03)' 
         }}>
      
      {/* Header Section */}
      <div className="px-4 py-3 border-bottom border-secondary border-opacity-10 d-flex align-items-center justify-content-between" 
           style={{ background: 'linear-gradient(90deg, rgba(173, 255, 0, 0.1) 0%, transparent 100%)' }}>
        <div className="d-flex align-items-center gap-2">
          <Zap size={16} className="text-accent-lime pulse" />
          <span className="font-mono small fw-bold text-primary" style={{ letterSpacing: '0.2em' }}>
            [ KEY_INSIGHT_VECTORS ]
          </span>
        </div>
        <Target size={14} className="text-accent-lime opacity-50" />
      </div>
      
      {/* Content Area */}
      <div className="p-4 flex-grow-1 overflow-auto custom-scrollbar-lime">
        <div className="list-unstyled mb-0">
          {points.length > 0 ? (
            points.map((point, index) => (
              <div key={index} 
                   className="d-flex align-items-start gap-3 mb-4 vector-item" 
                   style={{ animationDelay: `${index * 0.15}s` }}>
                
                {/* Custom Bullet Node */}
                <div className="mt-1 position-relative">
                  <div className="node-outer">
                    <ChevronRight size={10} className="node-icon" />
                  </div>
                  <div className="node-line"></div>
                </div>

                <div className="font-inter small text-secondary flex-grow-1" 
                     style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                  <span className="text-accent-lime font-mono x-small block mb-1" style={{ fontSize: '0.6rem' }}>
                    DATA_PTR_{index.toString().padStart(2, '0')}
                  </span>
                  {point}
                </div>
              </div>
            ))
          ) : (
            <div className="h-100 d-flex align-items-center justify-content-center opacity-30 font-mono italic">
              [ NO_VECTORS_DETECTED ]
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-auto px-4 py-2 border-top border-secondary border-opacity-10"
           style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
         <div className="d-flex align-items-center justify-content-between font-mono" style={{ fontSize: '0.65rem' }}>
            <span className="text-muted">VECTOR_STRENGTH: <span className="text-accent-lime">OPTIMAL</span></span>
            <span className="text-accent-lime opacity-50">#EXTRACT_COMPLETED</span>
         </div>
      </div>

      <style>{`
        .custom-scrollbar-lime::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar-lime::-webkit-scrollbar-thumb {
          background: var(--neon-lime);
          box-shadow: 0 0 5px var(--neon-lime);
        }
        
        .node-outer {
          width: 20px;
          height: 20px;
          border: 1px solid var(--neon-lime);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(45deg);
          background: rgba(173, 255, 0, 0.1);
          transition: 0.3s;
        }
        
        .node-icon {
          transform: rotate(-45deg);
          color: var(--neon-lime);
        }

        .vector-item {
          opacity: 0;
          animation: vectorEntry 0.5s ease forwards;
          position: relative;
        }

        .vector-item:hover .node-outer {
          background: var(--neon-lime);
          box-shadow: 0 0 10px var(--neon-lime);
        }

        .vector-item:hover .node-icon {
          color: black;
        }

        @keyframes vectorEntry {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .node-line {
          position: absolute;
          left: 50%;
          top: 20px;
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--neon-lime), transparent);
          opacity: 0.2;
        }
      `}</style>
    </div>
  )
}

export default KeyPoints