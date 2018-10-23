import React from "react";
import Appbar from 'muicss/lib/react/appbar';
import containerStyles from './header.module.css';

const Header = () => {
  return (
    <Appbar className={containerStyles.header}>
      <table>
        <tr class="mui--appbar-height">
          <td class="mui--text-title">BATCE Disaster Support</td>
          <td class="mui--text-right">
            <ul class="mui-list--inline mui--text-body2">
              <li><a href="#">About</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </td>
        </tr>
      </table>
    </Appbar>
  );
};

export default Header;
