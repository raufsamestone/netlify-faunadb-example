import React from 'react'
import deployButton from '../../assets/deploy-to-netlify.svg'
import logo from '../../assets/logo.svg'
import github from '../../assets/github.svg'
import styles from './AppHeader.css' // eslint-disable-line

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Netlify + Fauna DB</h1>
              <p className='app-intro'>
                JAMstack İstanbul Fauna DB + Netlify 
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://app.netlify.com/start/deploy?repository=https://github.com/raufsamestone/netlify-faunadb-example&stack=fauna'>
            <img src={deployButton} className='deploy-button' alt='deploy to netlify' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
