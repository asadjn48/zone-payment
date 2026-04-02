import React, { useState } from 'react';

interface DateFilterProps {
  options?: string[];
  value: string;
  onChange: (value: string) => void;
  onCustomRangeApply?: (start: string, end: string) => void;
}

export const DateFilter = ({ 
  options = ['Today', 'Last 7 Days', 'Last 30 Days', 'Custom Range'], 
  value, 
  onChange,
  onCustomRangeApply
}: DateFilterProps) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const [isPopoverOpen, setIsPopoverOpen] = useState(value === 'Custom Range');

  const handleOptionClick = (option: string) => {
    onChange(option);
    if (option === 'Custom Range') {
      setIsPopoverOpen(!isPopoverOpen);
    } else {
      setIsPopoverOpen(false); 
    }
  };

  const handleApply = () => {
    if (startDate && endDate) {
      if (onCustomRangeApply) onCustomRangeApply(startDate, endDate);
      setIsPopoverOpen(false); 
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm">
      
      <div className="flex items-center gap-2 text-gray-500 font-medium">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-sm">Date Filter:</span>
      </div>
      
      <div className="flex flex-wrap items-center gap-2">
        {options.map((option) => {
          const isActive = option === value;
          const isCustomRange = option === 'Custom Range';

          return (
            // FIX: The relative container is now specifically around each individual button
            <div key={option} className="relative">
              <button 
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-white bg-primary shadow-md border border-primary' 
                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100 border border-border'
                }`}
              >
                {option}
              </button>

              {/* FLOATING POPOVER: Anchors perfectly under the Custom Range button */}
              {isCustomRange && isPopoverOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 sm:left-auto sm:right-0 bg-white border border-border rounded-xl shadow-xl p-5 w-70 sm:w-90 animate-in fade-in slide-in-from-top-2 z-50">
                  
                  <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                    <h4 className="font-bold text-foreground text-sm">Select Custom Range</h4>
                    <button 
                      onClick={() => setIsPopoverOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                    >
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>

                  <div className="flex gap-4 mb-5">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Start Date</label>
                      <input 
                        type="date" 
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 hover:bg-white transition-colors cursor-pointer"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">End Date</label>
                      <input 
                        type="date" 
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 hover:bg-white transition-colors cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => {
                        setStartDate('');
                        setEndDate('');
                      }}
                      className="flex-1 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 text-sm font-semibold rounded-lg transition-colors"
                    >
                      Clear
                    </button>
                    <button 
                      onClick={handleApply}
                      disabled={!startDate || !endDate}
                      className="flex-1 py-2.5 bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Apply Filter
                    </button>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
      
    </div>
  );
};