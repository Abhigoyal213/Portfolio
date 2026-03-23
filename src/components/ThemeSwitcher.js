import React from 'react';
import { useTheme, COLOR_PROFILES } from '../contexts/ThemeContext';
import { FaPalette } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { activeProfile, setProfile, particleMode, setParticleMode } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('themes'); // 'themes' or 'backgrounds'

  const MODES = ['none', 'ghost', 'nodes', 'dust', 'rain', 'circuit', 'starfield', 'firefly'];

  return (
    <div className="relative z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 z-50 rounded-full bg-secondary shadow-lg flex items-center justify-center text-accent hover:scale-110 transition-all duration-300 border border-white/10"
        aria-label="Toggle Theme Menu"
      >
        <FaPalette size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 md:top-16 z-50 bg-secondary p-4 rounded-2xl shadow-2xl border border-white/10 w-72 backdrop-blur-lg">
          <div className="flex border-b border-white/10 mb-4 pb-2">
            <button
              onClick={() => setActiveTab('themes')}
              className={`flex-1 text-sm font-semibold uppercase tracking-wider pb-1 ${activeTab === 'themes' ? 'text-accent border-b-2 border-accent' : 'text-text-secondary'}`}
            >
              Themes
            </button>
            <button
              onClick={() => setActiveTab('backgrounds')}
              className={`flex-1 text-sm font-semibold uppercase tracking-wider pb-1 ${activeTab === 'backgrounds' ? 'text-accent border-b-2 border-accent' : 'text-text-secondary'}`}
            >
              Backgrounds
            </button>
          </div>

          {activeTab === 'themes' ? (
            <div className="grid grid-cols-2 gap-3">
              {COLOR_PROFILES.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => {
                    setProfile(profile.id);
                  }}
                  className={`flex flex-col gap-2 p-2 rounded-xl transition-all duration-300 border ${activeProfile.id === profile.id ? 'border-accent bg-white/5' : 'border-transparent hover:bg-white/5'}`}
                >
                  <div className="flex w-full h-8 rounded-lg overflow-hidden border border-white/10">
                    {profile.preview.map((color, idx) => (
                      <div key={idx} className="flex-1 h-full" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <span className="text-xs text-center text-text-primary whitespace-nowrap overflow-hidden text-ellipsis w-full">{profile.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {MODES.map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setParticleMode(mode);
                  }}
                  className={`p-2 rounded-xl transition-all duration-300 border text-xs font-semibold capitalize ${particleMode === mode ? 'border-accent text-accent bg-white/5' : 'border-transparent text-text-primary hover:bg-white/5'}`}
                >
                  {mode}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
