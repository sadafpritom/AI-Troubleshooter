import { predefinedSolutions } from '../data/solutions';
import { Solution, TroubleshootRequest, TroubleshootResponse } from '../types';

// Simulates API delay for realistic experience
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API service that can be easily replaced with real API calls
export class TroubleshootService {
  static async generateSolutions(request: TroubleshootRequest): Promise<TroubleshootResponse> {
    // Simulate API processing time
    await delay(1500 + Math.random() * 1000);
    
    // Randomly select 2-3 solutions
    const solutionCount = Math.floor(Math.random() * 2) + 2; // 2 or 3 solutions
    const shuffled = [...predefinedSolutions].sort(() => Math.random() - 0.5);
    const selectedSolutions = shuffled.slice(0, solutionCount);
    
    // Assign random confidence scores (60-95%)
    const solutionsWithConfidence: Solution[] = selectedSolutions.map(solution => ({
      ...solution,
      confidence: Math.floor(Math.random() * 36) + 60 // 60-95%
    }));
    
    // Sort by confidence (highest first)
    solutionsWithConfidence.sort((a, b) => b.confidence - a.confidence);
    
    return {
      solutions: solutionsWithConfidence,
      processingTime: 1.5
    };
  }
  
  // This method can be easily replaced with real LLM API integration
  static async analyzeIssue(issue: string): Promise<string> {
    await delay(800);
    
    // Mock analysis based on keywords
    const keywords = issue.toLowerCase();
    if (keywords.includes('slow') || keywords.includes('performance')) {
      return 'Performance-related issue detected. Analyzing system resources and optimization opportunities.';
    } else if (keywords.includes('network') || keywords.includes('internet') || keywords.includes('wifi')) {
      return 'Network connectivity issue identified. Checking connection protocols and configuration.';
    } else if (keywords.includes('crash') || keywords.includes('error')) {
      return 'Application stability issue found. Evaluating software compatibility and system resources.';
    } else {
      return 'General IT issue detected. Applying comprehensive diagnostic approach.';
    }
  }
}