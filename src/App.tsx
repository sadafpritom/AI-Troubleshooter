import React, { useState } from 'react';
import { Shield, Cpu, Sparkles } from 'lucide-react';
import TroubleshooterForm from './components/TroubleshooterForm';
import SolutionCard from './components/SolutionCard';
import KnowledgeBase from './components/KnowledgeBase';
import LoadingSpinner from './components/LoadingSpinner';
import { TroubleshootService } from './services/mockApi';
import { Solution } from './types';

function App() {
  const [solutions, setSolutions] = useState<Solution[]>([]);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string>('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleTroubleshoot = async (issue: string) => {
    setLoading(true);
    setSolutions([]);
    setAnalysis('');
    
    try {
      // Run analysis and solution generation in parallel
      const [analysisResult, solutionsResult] = await Promise.all([
        TroubleshootService.analyzeIssue(issue),
        TroubleshootService.generateSolutions({ issue })
      ]);
      
      setAnalysis(analysisResult);
      setSolutions(solutionsResult.solutions);
      setHasSearched(true);
    } catch (error) {
      console.error('Error generating solutions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-cyan-400" />
              <Cpu className="w-8 h-8 text-blue-400" />
              <Sparkles className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Troubleshooter
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered IT support system that analyzes your issues and provides intelligent, 
              step-by-step solutions with confidence scoring.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-12">
          {/* Troubleshooter Form */}
          <TroubleshooterForm onSubmit={handleTroubleshoot} loading={loading} />
          
          {/* Loading State */}
          {loading && (
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <LoadingSpinner />
              <div className="text-center pb-8">
                <p className="text-slate-300 font-medium">AI is analyzing your issue...</p>
                <p className="text-slate-500 text-sm mt-1">This may take a few seconds</p>
              </div>
            </div>
          )}
          
          {/* Analysis Results */}
          {analysis && !loading && (
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-lg">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analysis Complete</h3>
                  <p className="text-slate-300">{analysis}</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Solutions */}
          {solutions.length > 0 && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Recommended Solutions</h2>
                <p className="text-slate-400">AI-generated solutions ranked by confidence level</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <SolutionCard 
                    key={solution.id} 
                    solution={solution} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* No Results Message */}
          {hasSearched && solutions.length === 0 && !loading && (
            <div className="text-center py-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-4 rounded-xl inline-block mb-4">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No solutions found</h3>
              <p className="text-slate-400">Please try describing your issue differently or check the knowledge base below.</p>
            </div>
          )}
          
          {/* Knowledge Base */}
          <KnowledgeBase />
        </div>
      </div>
    </div>
  );
}

export default App;