import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { Solution } from '../types';

interface SolutionCardProps {
  solution: Solution;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, index }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 85) return 'text-emerald-400 bg-emerald-400/20';
    if (confidence >= 70) return 'text-yellow-400 bg-yellow-400/20';
    return 'text-orange-400 bg-orange-400/20';
  };

  const getConfidenceRing = (confidence: number) => {
    if (confidence >= 85) return 'ring-emerald-400/20';
    if (confidence >= 70) return 'ring-yellow-400/20';
    return 'ring-orange-400/20';
  };

  return (
    <div className={`group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-[1.02] ${getConfidenceRing(solution.confidence)} hover:ring-2`}>
      {/* Solution Rank Badge */}
      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
        #{index + 1}
      </div>
      
      {/* Confidence Score */}
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${getConfidenceColor(solution.confidence)}`}>
        <CheckCircle className="w-4 h-4 mr-2" />
        {solution.confidence}% Confidence
      </div>
      
      {/* Solution Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {solution.title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {solution.description}
        </p>
      </div>
      
      {/* Category Badge */}
      <div className="inline-block bg-slate-700/50 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
        {solution.category}
      </div>
      
      {/* Steps */}
      <div className="space-y-2">
        <h4 className="text-slate-300 font-medium text-sm mb-3">Solution Steps:</h4>
        {solution.steps.map((step, stepIndex) => (
          <div key={stepIndex} className="flex items-start space-x-3 group/step">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-full flex items-center justify-center mt-0.5">
              <span className="text-cyan-300 text-xs font-medium">{stepIndex + 1}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed group-hover/step:text-slate-300 transition-colors">
              {step}
            </p>
          </div>
        ))}
      </div>
      
      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group/btn">
          <span>Try This Solution</span>
          <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;