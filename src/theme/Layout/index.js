import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import { AnimatedBackground } from '../../components/AnimatedBackground';
import { useSearchKeyboardShortcut } from '../../components/SearchKeyboardShortcut';

export default function Layout(props) {
  useSearchKeyboardShortcut();
  
  return (
    <>
      <AnimatedBackground />
      <OriginalLayout {...props} />
    </>
  );
}