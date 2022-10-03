import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { NavHashLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';

import { getConfig } from '@edx/frontend-platform';
import PropTypes from 'prop-types';
import messages from './AccountSettingsPage.messages';

function JumpNav({ intl, displayDemographicsLink }) {
  return (
    <div className="jump-nav">
      <Scrollspy
        items={[          
          'site-preferences',          
        ]}
        className="list-unstyled"
        currentClassName="font-weight-bold"
      >
        
        <li>
          <NavHashLink to="#site-preferences">
            {intl.formatMessage(messages['account.settings.section.site.preferences'])}
          </NavHashLink>
        </li>               
      </Scrollspy>
    </div>
  );
}

JumpNav.propTypes = {
  intl: intlShape.isRequired,
  displayDemographicsLink: PropTypes.bool.isRequired,
};

export default injectIntl(JumpNav);
