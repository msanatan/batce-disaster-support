import React from 'react';
import { Link } from "gatsby"
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import containerStyles from './header.module.css';

const Header = () => {
  return (
    <Appbar className={containerStyles.header}>
      <Container>
        <table>
          <tbody>
            <tr className='mui--appbar-height'>
              <td className='mui--text-title'><Link to="/">BATCE Disaster Support</Link></td>
              <td className='mui--text-right'>
                <ul className='mui-list--inline mui--text-body2'>
                  <li><Link to="/about/">About</Link></li>
                  <li><Link to="/donate/">Donate</Link></li>
                  <li><Link to="/contributors/">Contributors</Link></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Appbar>
  );
};

export default Header;
