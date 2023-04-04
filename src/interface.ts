export interface ICountry {
  code: string;
  name: string;
  native: string;
  capital?: string;
  currency?: string;
  languages: Array<{ name: string }>;
  continent?: { name: string };
  phone: string;
  emoji?: string;
  emojiU?: string;
}

export interface ICardProps {
  code: string;
  name?: string;
  native: string;
  phone: string;
  languages: Array<{ name: string }>;
  continent?: { name: string };
}

export interface ILanguage {
  name: string;
  code: string;
}
