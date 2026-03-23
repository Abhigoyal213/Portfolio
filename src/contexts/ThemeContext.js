import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const COLOR_PROFILES = [
  {
    id: 'teal',
    name: 'Teal Dark',
    preview: ['#2dd4bf', '#14b8a6', '#050505', '#f5f5f5'],
    vars: {
      '--bg-primary': '#050505',
      '--bg-secondary': '#0a0a0a',
      '--text-primary': '#f5f5f5',
      '--text-secondary': '#a1a1aa',
      '--accent': '#2dd4bf',
      '--accent-secondary': '#14b8a6',
      '--accent-glow': 'rgba(45, 212, 191, 0.25)',
    },
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    preview: ['#7aa2f7', '#bb9af7', '#0d0f18', '#c0caf5'],
    vars: {
      '--bg-primary': '#0d0f18',
      '--bg-secondary': '#141621',
      '--text-primary': '#c0caf5',
      '--text-secondary': '#a9b1d6',
      '--accent': '#7aa2f7',
      '--accent-secondary': '#bb9af7',
      '--accent-glow': 'rgba(122, 162, 247, 0.25)',
    },
  },
  {
    id: 'catppuccin',
    name: 'Catppuccin Mocha',
    preview: ['#cba6f7', '#f38ba8', '#1e1e2e', '#cdd6f4'],
    vars: {
      '--bg-primary': '#1e1e2e',
      '--bg-secondary': '#181825',
      '--text-primary': '#cdd6f4',
      '--text-secondary': '#bac2de',
      '--accent': '#cba6f7',
      '--accent-secondary': '#f38ba8',
      '--accent-glow': 'rgba(203, 166, 247, 0.25)',
    },
  },
  {
    id: 'dracula',
    name: 'Dracula',
    preview: ['#bd93f9', '#ff79c6', '#282a36', '#f8f8f2'],
    vars: {
      '--bg-primary': '#282a36',
      '--bg-secondary': '#21222c',
      '--text-primary': '#f8f8f2',
      '--text-secondary': '#ccc',
      '--accent': '#bd93f9',
      '--accent-secondary': '#ff79c6',
      '--accent-glow': 'rgba(189, 147, 249, 0.25)',
    },
  },
  {
    id: 'nord',
    name: 'Nord',
    preview: ['#88c0d0', '#81a1c1', '#2e3440', '#d8dee9'],
    vars: {
      '--bg-primary': '#2e3440',
      '--bg-secondary': '#3b4252',
      '--text-primary': '#d8dee9',
      '--text-secondary': '#e5e9f0',
      '--accent': '#88c0d0',
      '--accent-secondary': '#81a1c1',
      '--accent-glow': 'rgba(136, 192, 208, 0.25)',
    },
  },
  {
    id: 'rose-pine',
    name: 'Rosé Pine',
    preview: ['#c4a7e7', '#ebbcba', '#191724', '#e0def4'],
    vars: {
      '--bg-primary': '#191724',
      '--bg-secondary': '#1f1d2e',
      '--text-primary': '#e0def4',
      '--text-secondary': '#908caa',
      '--accent': '#c4a7e7',
      '--accent-secondary': '#ebbcba',
      '--accent-glow': 'rgba(196, 167, 231, 0.25)',
    },
  },
  // The original My-Portfolio theme
  {
    id: 'classic',
    name: 'Classic Gradient',
    preview: ['#ff56f6', '#406aff', '#0a0a0a', '#ffffff'],
    vars: {
      '--bg-primary': '#0a0a0a',
      '--bg-secondary': '#1a1a1a',
      '--text-primary': '#ffffff',
      '--text-secondary': '#cccccc',
      '--accent': '#ff56f6',
      '--accent-secondary': '#406aff',
      '--accent-glow': 'rgba(255, 86, 246, 0.51)',
    },
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    preview: ['#0ea5e9', '#0284c7', '#020617', '#f8fafc'],
    vars: {
      '--bg-primary': '#020617',
      '--bg-secondary': '#0f172a',
      '--text-primary': '#f8fafc',
      '--text-secondary': '#94a3b8',
      '--accent': '#0ea5e9',
      '--accent-secondary': '#0284c7',
      '--accent-glow': 'rgba(14, 165, 233, 0.25)',
    },
  }
];

const ThemeContext = createContext({
  activeProfile: COLOR_PROFILES[0],
  setProfile: () => {},
  particleMode: 'none',
  setParticleMode: () => {},
});

export function ThemeProvider({ children }) {
  const [activeProfile, setActiveProfile] = useState(COLOR_PROFILES[0]);
  const [particleMode, setParticleModeState] = useState('starfield');

  const applyTheme = useCallback((profile) => {
    const root = document.documentElement;
    Object.entries(profile.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('my-portfolio-theme');
    if (savedTheme) {
      const found = COLOR_PROFILES.find(p => p.id === savedTheme);
      if (found) {
        setActiveProfile(found);
        applyTheme(found);
      } else {
        applyTheme(COLOR_PROFILES[0]);
      }
    } else {
      applyTheme(COLOR_PROFILES[0]);
    }

    const savedParticle = localStorage.getItem('my-portfolio-particles');
    if (savedParticle) {
      setParticleModeState(savedParticle);
    }
  }, [applyTheme]);

  const setParticleMode = useCallback((mode) => {
    setParticleModeState(mode);
    localStorage.setItem('my-portfolio-particles', mode);
  }, []);

  const setProfile = useCallback((id) => {
    const found = COLOR_PROFILES.find(p => p.id === id);
    if (found) {
      setActiveProfile(found);
      applyTheme(found);
      localStorage.setItem('my-portfolio-theme', id);
    }
  }, [applyTheme]);

  // Provide styled-components variables mapped to CSS properties
  const styledTheme = {
    bgLight: "var(--bg-secondary)",
    bg: "var(--bg-primary)",
    primary: "var(--accent)",
    text_primary: "var(--text-primary)",
    text_secondary: "var(--text-secondary)",
    card: "var(--bg-secondary)",
    card_light: "var(--bg-secondary)",
    button: "var(--accent)",
    white: '#FFFFFF',
    black: '#000000',
  };

  return (
    <ThemeContext.Provider value={{ activeProfile, setProfile, particleMode, setParticleMode }}>
      <StyledThemeProvider theme={styledTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
