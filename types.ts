import React from 'react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  challenge: string;
  solution: string;
  image: string;
}

export interface Capability {
  id: string;
  title: string;
  tech: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}