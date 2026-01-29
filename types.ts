
import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  // Fixed: Added React import to resolve React.ReactNode namespace error
  icon: React.ReactNode;
}
