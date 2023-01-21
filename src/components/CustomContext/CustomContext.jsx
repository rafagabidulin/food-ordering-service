import React, { useMemo, useState } from 'react';

export const CustomContext = React.createContext();

export const CustomComponentProvider = (children) => {
  const [state, setState] = useState();

  const contextValue = useMemo(() => ({ state, setState }), [state]);

  return <CustomContext.Provider value={contextValue}>{children}</CustomContext.Provider>;
};
