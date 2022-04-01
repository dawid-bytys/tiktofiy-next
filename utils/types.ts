export type Theme = 'default' | 'carbon' | 'material' | 'metaverse';

export interface SeoProps {
  readonly title: string;
}

export interface ErrorAlertProps {
  readonly errorMessage: string;
}

export interface InputProps {
  readonly placeholder: string;
  readonly className: string;
}
