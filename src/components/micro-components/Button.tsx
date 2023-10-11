import { Link } from 'react-router-dom';
interface LinkProps {
  linkClass: string;
  linkText: string;
  href: string;
}
const Button: React.FC<LinkProps> = ({ linkClass, href, linkText }) => {
  return (
    <Link className={linkClass} to={href}>
      {linkText}
    </Link>
  );
};
export default Button;
