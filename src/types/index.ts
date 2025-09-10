export interface Solution {
  id: string;
  title: string;
  description: string;
  steps: string[];
  confidence: number;
  category: string;
}

export interface KnowledgeBaseItem {
  id: string;
  issue: string;
  solution: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface TroubleshootRequest {
  issue: string;
}

export interface TroubleshootResponse {
  solutions: Solution[];
  processingTime: number;
}