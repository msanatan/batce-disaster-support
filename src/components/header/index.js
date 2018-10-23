import React from 'react';
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
              <td className='mui--text-title'>BATCE Disaster Support</td>
              <td className='mui--text-right'>
                <ul className='mui-list--inline mui--text-body2'>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Donate</a></li>
                  <li><a href="#">Contact</a></li>
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
