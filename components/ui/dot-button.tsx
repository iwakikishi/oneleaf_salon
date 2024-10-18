import React from 'react';

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

export const DotButton: React.FC<DotButtonProps> = ({ selected, onClick }) => (
  <button className={`w-2 h-2 mx-1 rounded-full ${selected ? 'bg-gray-800' : 'bg-gray-300'}`} type='button' onClick={onClick} />
);
