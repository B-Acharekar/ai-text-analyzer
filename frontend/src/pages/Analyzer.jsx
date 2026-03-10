import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Analyzer.css'
import SystemStatusBar from '../components/SystemStatusBar';
import InsightGrid from '../components/InsightGrid';
import { Send, Terminal, Loader2, Database } from 'lucide-react';

const Analyzer = () => {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const response = await axios.post('http://localhost:8000/analyze', { 
        text: inputText 
      });
      setAnalysis(response.data);
    } catch (err) {
      setError("UPLINK_FAILURE: UNABLE TO CONTACT NEURAL PROCESSOR.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cyber-main-wrapper" style={{ flexDirection: 'column', overflowY: 'auto', display: 'block' }}>
      <div className="scanline"></div>
      <SystemStatusBar mode="NEURAL_ANALYZER_PRO" />
      
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Header Section */}
            <header className="mb-5 fade-in">
              <h1 className="cyber-glitch-text fs-2" data-text="NEURAL_INPUT_INTERFACE">
                NEURAL_INPUT_INTERFACE
              </h1>
              <p className="text-secondary font-mono small mt-2">{">"} READY_FOR_LINGUISTIC_DECONSTRUCTION</p>
            </header>

            {/* Main Input Card */}
            <div className="card-cyber mb-4 fade-in">
              <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary border-opacity-10 pb-2">
                <div className="d-flex align-items-center gap-2">
                  <Database size={16} className="text-accent-cyan" />
                  <span className="font-mono small fw-bold">DATA_STREAM_BUFFER</span>
                </div>
                <div className="font-mono x-small text-muted" style={{ fontSize: '0.7rem' }}>
                  LENG: {inputText.length} bits
                </div>
              </div>
              
              <textarea
                className="form-control-cyber w-100 mb-4"
                style={{ minHeight: '200px', resize: 'none' }}
                placeholder="// Enter coordinates, transcripts, or neural logs..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={loading}
              />
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="font-mono small text-secondary">
                  <span className={loading ? "status-busy pulse" : "status-online pulse"}></span>
                  {loading ? 'STATUS: PROCESSING...' : 'STATUS: STANDBY'}
                </div>
                
                <button 
                  className="btn-cyber d-flex align-items-center gap-2"
                  onClick={handleAnalyze}
                  disabled={loading || !inputText.trim()}
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? 'DECRYPTING...' : 'EXECUTE'}
                </button>
              </div>
            </div>

            {/* Error UI */}
            {error && (
              <div className="card-cyber border-accent-red text-accent-red font-mono p-3 fade-in mb-4">
                <div className="d-flex align-items-center gap-2">
                  <Terminal size={18} />
                  <span>{error}</span>
                </div>
              </div>
            )}

            {/* Progress Bar */}
            {loading && (
              <div className="py-4 fade-in">
                <div className="progress-container" style={{ height: '2px', background: 'var(--glass)', position: 'relative', overflow: 'hidden' }}>
                  <div className="progress-fill" style={{ 
                    position: 'absolute', height: '100%', width: '40%', 
                    background: 'var(--neon-cyan)', boxShadow: '0 0 10px var(--neon-cyan)',
                    animation: 'loading-bar 1.5s infinite linear'
                  }}></div>
                </div>
              </div>
            )}

            {/* Analysis Results */}
            {analysis && !loading && (
              <div className="fade-in mt-2">
                <InsightGrid analysis={analysis} />
              </div>
            )}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes loading-bar { 0% { left: -40%; } 100% { left: 100%; } }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .x-small { font-size: 0.65rem; }
      `}</style>
    </div>
  );
};

export default Analyzer;