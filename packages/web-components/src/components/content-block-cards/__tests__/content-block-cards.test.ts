/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, render } from 'lit/html.js';
import ArrowRight20 from '../../../internal/vendor/@carbon/web-components/icons/arrow--right/20';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../card/card-heading';
import '../content-block-cards';

const template = (props?) => {
  const { heading, children, ctaType, href } = props ?? {};
  return html`
    <c4d-content-block-cards>
      <c4d-content-block-heading>${heading}</c4d-content-block-heading>
      <c4d-card-group>${children}</c4d-card-group>
      <c4d-card-cta
        slot="footer"
        cta-type="${ifDefined(ctaType)}"
        href="${ifDefined(href)}">
        <p>ctaCopy-foo</p>
        ${ArrowRight20({ slot: 'footer' })}
      </c4d-card-cta>
    </c4d-content-block-cards>
  `;
};

describe('c4d-content-block-cards', function () {
  describe('Misc attributes', function () {
    it('should render with minimum attributes', async function () {
      render(template(), document.body);
      await Promise.resolve();
      expect(
        document.body.querySelector('c4d-content-block-cards')
      ).toMatchSnapshot({ mode: 'shadow' });
    });

    it('should render with various attributes', async function () {
      render(
        template({
          heading: 'heading-foo',
          cards: html`
            <c4d-card-group-item href="https://example.com">
              <c4d-card-heading>Nunc convallis lobortis</c4d-card-heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                et ultricies est. Mauris iaculis eget dolor nec hendrerit.
                Phasellus at elit sollicitudin, sodales nulla quis, consequat
                libero.
              </p>
              <c4d-card-cta-footer slot="footer">
                ${ArrowRight20({ slot: 'icon' })}
              </c4d-card-cta-footer>
            </c4d-card-group-item>
          `,
        }),
        document.body
      );
      await Promise.resolve();
      expect(
        document.body.querySelector('c4d-content-block-cards')
      ).toMatchSnapshot({ mode: 'shadow' });
    });
  });

  afterEach(async function () {
    await render(undefined!, document.body);
  });
});
