import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>
          sina solouksaran
        </h1>
        <p>
        Professional Mountain Biker
        </p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Begin
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
