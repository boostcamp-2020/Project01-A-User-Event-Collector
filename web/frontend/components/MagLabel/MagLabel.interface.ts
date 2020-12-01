interface MagLabelStyles {
  backgroundColor?: string;
  backgroundImage?: string;
  width: number;
}

interface MagLabelProps extends MagLabelStyles {
  children: string;
}

export type { MagLabelStyles, MagLabelProps };
