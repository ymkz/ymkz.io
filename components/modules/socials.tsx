import React from 'react'
import Row from 'components/abstracts/row'
import SectionContainer from 'components/abstracts/section-container'
import SectionTitle from 'components/elements/section-title'
import SocialLink from 'components/elements/social-link'

function Socials() {
  return (
    <SectionContainer id="socials">
      <SectionTitle>Socials</SectionTitle>
      <Row space={24}>
        <SocialLink
          src={require('static/images/icons/github.svg?inline')}
          href="https://github.com/ymkz"
          alt="Link to GitHub"
        />
        <SocialLink
          src={require('static/images/icons/twitter.svg?inline')}
          href="https://twitter.com/ymkzly"
          alt="Link to Twitter"
        />
        <SocialLink
          src={require('static/images/icons/facebook.svg?inline')}
          href="https://facebook.com/ymkzly"
          alt="Link to Facebook"
        />
      </Row>
    </SectionContainer>
  )
}

export default Socials
