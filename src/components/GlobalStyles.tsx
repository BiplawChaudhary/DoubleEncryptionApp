const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
    *, *::before, *::after { box-sizing: border-box; }
    body { margin: 0; font-family: 'Syne', sans-serif; background: #f0f4ff; min-height: 100vh; }
    .mono { font-family: 'DM Mono', monospace; }

    @keyframes slide-up { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
    .su  { animation: slide-up .55s cubic-bezier(.16,1,.3,1) both; }
    .su1 { animation: slide-up .55s .10s cubic-bezier(.16,1,.3,1) both; }
    .su2 { animation: slide-up .55s .20s cubic-bezier(.16,1,.3,1) both; }
    .su3 { animation: slide-up .55s .32s cubic-bezier(.16,1,.3,1) both; }

    @keyframes panel-in { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    .panel-in { animation: panel-in .35s cubic-bezier(.16,1,.3,1) both; }

    @keyframes result-in { from{opacity:0;transform:scaleY(.94)} to{opacity:1;transform:scaleY(1)} }
    .result-in { animation: result-in .3s cubic-bezier(.16,1,.3,1) both; transform-origin: top; }

    @keyframes shimmer-move { 0%{background-position:-200% center} 100%{background-position:200% center} }
    .shimmer-btn {
      background: linear-gradient(105deg,#3b82f6,#6366f1 45%,#ec4899 60%,#3b82f6);
      background-size: 200% auto;
      transition: background-position .5s, box-shadow .2s;
    }
    .shimmer-btn:hover {
      background-position: right center;
      box-shadow: 0 0 32px rgba(99,102,241,.35);
    }

    /* Input skin - light theme */
    .ci input {
      background: #ffffff !important;
      border: 1.5px solid #bfdbfe !important;
      color: #1e3a5f !important;
      border-radius: 12px !important;
      padding: 14px 16px !important;
      font-family: 'DM Mono', monospace !important;
      font-size: 12.5px !important;
      width: 100% !important;
      transition: border-color .2s, background .2s, box-shadow .2s !important;
    }
    .ci input:focus {
      border-color: #6366f1 !important;
      background: #f5f3ff !important;
      box-shadow: 0 0 0 3px rgba(99,102,241,.12) !important;
      outline: none !important;
    }
    .ci input:hover:not(:focus) {
      border-color: #93c5fd !important;
      background: #eff6ff !important;
    }
    .ci label {
      color: #6b7280 !important;
      font-family: 'Syne', sans-serif !important;
      font-size: 10.5px !important;
      letter-spacing: .09em !important;
      text-transform: uppercase !important;
    }

    ::-webkit-scrollbar { width: 4px; height: 4px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #bfdbfe; border-radius: 99px; }
  `}</style>
);

export default GlobalStyles;