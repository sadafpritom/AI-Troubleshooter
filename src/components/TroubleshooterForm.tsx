import React, { useState } from 'react';
import { Search, Zap, Brain } from 'lucide-react';

interface TroubleshooterFormProps {
  onSubmit: (issue: string) => void;
  loading: boolean;
}

const TroubleshooterForm: React.FC<TroubleshooterFormProps> = ({ onSubmit, loading }) => {
  const [issue, setIssue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (issue.trim()) {
      onSubmit(issue.trim());
    }
  };

  const exampleIssues = [
    "My computer is running very slowly",
    "Can't connect to Wi-Fi network", 
    "Application keeps crashing",
    "Printer not working properly"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-4 rounded-xl inline-block mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">AI Troubleshooter</h2>
        <p className="text-slate-400">Describe your IT issue and get instant AI-powered solutions</p>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <label htmlFor="issue-input" className="block text-slate-300 font-medium mb-3">
            What's the problem you're experiencing?
          </label>
          <div className="relative">
            <textarea
              id="issue-input"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="Describe your IT issue in detail... (e.g., My laptop won't connect to the office Wi-Fi and shows authentication error)"
              rows={4}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
              disabled={loading}
            />
            <Search className="absolute top-3 right-3 w-5 h-5 text-slate-400" />
          </div>
        </div>
        
        {/* Example Issues */}
        <div>
          <p className="text-slate-400 text-sm mb-3">Quick examples:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {exampleIssues.map((example, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setIssue(example)}
                className="text-left p-3 bg-slate-700/30 border border-slate-600/50 rounded-lg text-slate-300 hover:border-cyan-400/30 hover:bg-slate-700/50 transition-all duration-300 text-sm"
                disabled={loading}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={!issue.trim() || loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
              Analyzing Issue...
            </>
          ) : (
            <>
              <Zap className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Generate Solutions
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default TroubleshooterForm;