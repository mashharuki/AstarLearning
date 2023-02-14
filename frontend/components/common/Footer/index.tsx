
import {TWITTER_URL} from '../Constant';

/**
 * Footer Component
 * @returns 
 */
const Footer = (): JSX.Element => {
  
  return (
    <div className="m-5">
      built by <a href={TWITTER_URL}>HARUKI@05758694</a>
    </div>
  );
};

export default Footer;