export interface LogoProps {
  /**
   * @default "md"
   */
  size?: "sm" | "md" | "lg";

  /**
   */
  className?: string;

  /**
   * @default true
   */
  asLink?: boolean;

  /**
   * @default "/images/logo.png"
   */
  src?: string;

  /**
   * @default "GILMAR Ecological Resort Logo"
   */
  alt?: string;
}
