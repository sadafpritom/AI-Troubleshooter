import { Solution, KnowledgeBaseItem } from '../types';

export const predefinedSolutions: Solution[] = [
  {
    id: 'sol-1',
    title: 'Restart Network Services',
    description: 'Reset network components to resolve connectivity issues',
    steps: [
      'Disconnect from Wi-Fi network',
      'Restart your router and modem',
      'Wait 30 seconds before reconnecting',
      'Reconnect to your network'
    ],
    confidence: 0,
    category: 'Network'
  },
  {
    id: 'sol-2',
    title: 'Clear Browser Cache',
    description: 'Remove temporary files that may be causing browser issues',
    steps: [
      'Open browser settings',
      'Navigate to Privacy & Security',
      'Clear browsing data',
      'Restart the browser'
    ],
    confidence: 0,
    category: 'Browser'
  },
  {
    id: 'sol-3',
    title: 'Update Device Drivers',
    description: 'Install latest drivers to fix hardware compatibility issues',
    steps: [
      'Open Device Manager',
      'Locate the problematic device',
      'Right-click and select "Update driver"',
      'Restart your computer'
    ],
    confidence: 0,
    category: 'Hardware'
  },
  {
    id: 'sol-4',
    title: 'Run System Diagnostics',
    description: 'Use built-in tools to identify and fix system issues',
    steps: [
      'Open System Settings',
      'Navigate to Update & Security',
      'Run Windows Troubleshooter',
      'Follow recommended fixes'
    ],
    confidence: 0,
    category: 'System'
  },
  {
    id: 'sol-5',
    title: 'Check System Resources',
    description: 'Monitor and optimize system performance',
    steps: [
      'Open Task Manager',
      'Check CPU and memory usage',
      'Close unnecessary applications',
      'Restart if needed'
    ],
    confidence: 0,
    category: 'Performance'
  },
  {
    id: 'sol-6',
    title: 'Verify Software Compatibility',
    description: 'Ensure software versions are compatible with your system',
    steps: [
      'Check software system requirements',
      'Update to latest version',
      'Run in compatibility mode if needed',
      'Contact software support'
    ],
    confidence: 0,
    category: 'Software'
  },
  {
    id: 'sol-7',
    title: 'Reset Application Settings',
    description: 'Restore application to default configuration',
    steps: [
      'Close the application completely',
      'Locate application data folder',
      'Backup current settings',
      'Reset to default configuration'
    ],
    confidence: 0,
    category: 'Application'
  },
  {
    id: 'sol-8',
    title: 'Check Security Settings',
    description: 'Review and adjust security configurations',
    steps: [
      'Open security software',
      'Check firewall settings',
      'Review blocked applications',
      'Adjust permissions as needed'
    ],
    confidence: 0,
    category: 'Security'
  }
];

export const knowledgeBase: KnowledgeBaseItem[] = [
  {
    id: 'kb-1',
    issue: 'Computer running very slowly',
    solution: 'Check for background processes, clear temporary files, and ensure adequate storage space. Consider running disk cleanup and defragmentation.',
    category: 'Performance',
    difficulty: 'Easy'
  },
  {
    id: 'kb-2',
    issue: 'Unable to connect to Wi-Fi',
    solution: 'Restart your router, forget and reconnect to the network, update network drivers, or reset network settings.',
    category: 'Network',
    difficulty: 'Easy'
  },
  {
    id: 'kb-3',
    issue: 'Application keeps crashing',
    solution: 'Update the application, check system compatibility, clear application cache, or reinstall the software.',
    category: 'Software',
    difficulty: 'Medium'
  },
  {
    id: 'kb-4',
    issue: 'Blue Screen of Death (BSOD)',
    solution: 'Note the error code, check for hardware issues, update drivers, run memory diagnostics, or boot in safe mode.',
    category: 'System',
    difficulty: 'Hard'
  },
  {
    id: 'kb-5',
    issue: 'Email not syncing',
    solution: 'Check internet connection, verify email settings, update email client, or re-add the email account.',
    category: 'Communication',
    difficulty: 'Medium'
  },
  {
    id: 'kb-6',
    issue: 'Printer not responding',
    solution: 'Check printer connection, restart print spooler service, update printer drivers, or clear print queue.',
    category: 'Hardware',
    difficulty: 'Easy'
  },
  {
    id: 'kb-7',
    issue: 'Files corrupted or missing',
    solution: 'Check recycle bin, run system file checker, restore from backup, or use file recovery software.',
    category: 'Data',
    difficulty: 'Medium'
  },
  {
    id: 'kb-8',
    issue: 'USB device not recognized',
    solution: 'Try different USB port, update USB drivers, check device manager, or test with another computer.',
    category: 'Hardware',
    difficulty: 'Easy'
  },
  {
    id: 'kb-9',
    issue: 'Browser redirecting to unwanted sites',
    solution: 'Run antivirus scan, clear browser data, check for malicious extensions, or reset browser settings.',
    category: 'Security',
    difficulty: 'Medium'
  },
  {
    id: 'kb-10',
    issue: 'Audio not working',
    solution: 'Check volume settings, update audio drivers, test with different applications, or troubleshoot audio devices.',
    category: 'Audio',
    difficulty: 'Easy'
  }
];