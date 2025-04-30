import { useTranslations } from '../../../../translations';

export const getServices = (translations: ReturnType<typeof useTranslations>) => [
  {
    id: 1,
    title: translations.services.webdev.title,
    description: translations.services.webdev.description,
    features: translations.services.webdev.features,
    benefits: translations.services.webdev.benefits,
  },
  {
    id: 2,
    title: translations.services.cloud.title,
    description: translations.services.cloud.description,
    features: translations.services.cloud.features,
    benefits: translations.services.cloud.benefits,
  },
  {
    id: 3,
    title: translations.services.digital.title,
    description: translations.services.digital.description,
    features: translations.services.digital.features,
    benefits: translations.services.digital.benefits,
  },
  {
    id: 4,
    title: translations.services.consulting.title,
    description: translations.services.consulting.description,
    features: translations.services.consulting.features,
    benefits: translations.services.consulting.benefits,
  },
];