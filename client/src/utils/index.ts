const createIntlNumberFormatter = (
  locale: string,
  config: { style: string; currency: string }
) => new Intl.NumberFormat(locale, config);

export { createIntlNumberFormatter };
