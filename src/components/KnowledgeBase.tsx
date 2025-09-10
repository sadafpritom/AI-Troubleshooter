import React from 'react';
import { BookOpen, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { knowledgeBase } from '../data/solutions';

const KnowledgeBase: React.FC = () => {
  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
      case 'Medium':
        return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'Hard':
        return <AlertCircle className="w-4 h-4 text-red-400" />;
      default:
        return <CheckCircle className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-emerald-300 bg-emerald-400/20 border-emerald-400/30';
      case 'Medium':
        return 'text-yellow-300 bg-yellow-400/20 border-yellow-400/30';
      case 'Hard':
        return 'text-red-300 bg-red-400/20 border-red-400/30';
      default:
        return 'text-emerald-300 bg-emerald-400/20 border-emerald-400/30';
    }
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 rounded-xl mr-4">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Knowledge Base</h2>
          <p className="text-slate-400 mt-1">Quick solutions for common IT issues</p>
        </div>
      </div>
      
      {/* Knowledge Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {knowledgeBase.map((item) => (
          <div key={item.id} className="group bg-slate-700/30 border border-slate-600/50 rounded-xl p-5 hover:border-purple-400/30 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-white font-medium text-sm leading-relaxed group-hover:text-purple-300 transition-colors flex-1 pr-3">
                {item.issue}
              </h3>
              <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(item.difficulty)}`}>
                {getDifficultyIcon(item.difficulty)}
                <span className="ml-1">{item.difficulty}</span>
              </div>
            </div>
            
            {/* Category */}
            <div className="inline-block bg-slate-600/50 text-purple-300 px-2 py-1 rounded-md text-xs font-medium mb-3">
              {item.category}
            </div>
            
            {/* Solution */}
            <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;