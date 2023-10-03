interface LinkProps {
  linkClass: string;
  linkText: string;
  href: string;
}
const Button: React.FC<LinkProps> = ({ linkClass, href, linkText }) => {
  return (
    <a className={linkClass} href={href}>
      {linkText}
    </a>
  );
};
export default Button;
