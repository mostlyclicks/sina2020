import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>
        <a href="https://www.gatsbyjs.org/">Gatsby</a> HTML5Up
        </h1>
        <p>
        <a href="https://github.com/app-generator/gatsby-html5up-highlights">Open-Source</a> app with Highlight design
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
