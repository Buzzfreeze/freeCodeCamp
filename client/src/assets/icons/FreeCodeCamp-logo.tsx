import React from 'react';
import { useTranslation } from 'react-i18next';

function FreeCodeCampLogo(): JSX.Element {
  const { t } = useTranslation();

  return <span style={{ color: 'white', fontSize: 24 }}>CareerVio</span>;
}

FreeCodeCampLogo.displayName = 'FreeCodeCampLogo';

export default FreeCodeCampLogo;
