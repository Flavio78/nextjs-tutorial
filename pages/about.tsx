import Footer from '@/components/Footer';
import { ReactElement } from 'react';
import classes from '../styles/About.module.scss';

const About = () => {
  return (
    <div className="content">
      <h2 className={classes['highlight-scss']}>About Page</h2>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
};

export default About;

About.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
