// Copyright 2017-2023 @polkadot/app-nis authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { UseTranslationResponse } from 'react-i18next';

import { useTranslation as useTranslationBase } from 'react-i18next';

export function useTranslation (): UseTranslationResponse<'app-nis', undefined> {
  return useTranslationBase('app-nis');
}
