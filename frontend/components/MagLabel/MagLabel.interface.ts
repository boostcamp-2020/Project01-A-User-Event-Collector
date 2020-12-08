interface MagLabelStyles {
  backgroundColor?: string;
  backgroundImage?: string;
  width: number;
}

interface MagLabelProps extends MagLabelStyles {
  children: string;
  className?: string;
}

export type { MagLabelStyles, MagLabelProps };
