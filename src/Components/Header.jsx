import React from 'react'

const Header = () => {
  return (
    <div className="header">
    <div className="header__heading">
      <div className="heading__title">Payouts</div>
      <div className="heading__info">
        <div className="info__icon" style={{display:'flex'}}>
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div className="info__text">How it works?</div>
      </div>
    </div>
    <div className="header__search">
      <div className="search__box">
        <div className="box__icon">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="svg-search-icon">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input className="box__input" type="text" placeholder="Search features, tutorials, etc." />
      </div>
    </div>
    <div className="header__actions">
      <div className="actions_notifications">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_47498_2532)">
<circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
<path d="M28.4211 10.0237L11.1158 13.3823C10.4632 13.499 10 14.1287 10 14.8517V22.5019C10 23.225 10.4632 23.8547 11.1158 23.9713L12.8842 24.3212C13.6 25.6273 14.9474 27.8897 16.7579 29.7323C17.3684 30.362 18.3789 29.8022 18.2526 28.8693C18.0842 27.6331 18.1263 26.3037 18.1895 25.3707L28.4211 27.3766C29.2421 27.5398 30 26.8401 30 25.9072V11.4931C30 10.5602 29.2421 9.86046 28.4211 10.0237ZM16.4632 19.6331C16.4632 19.8897 16.2737 20.0996 16.0421 20.0996H14.3158C14.0842 20.0996 13.8947 19.8897 13.8947 19.6331V17.7206C13.8947 17.464 14.0842 17.2541 14.3158 17.2541H16.0421C16.2737 17.2541 16.4632 17.464 16.4632 17.7206V19.6331ZM21.2842 19.6331C21.2842 19.8897 21.0947 20.0996 20.8632 20.0996H19.1368C18.9053 20.0996 18.7158 19.8897 18.7158 19.6331V17.7206C18.7158 17.464 18.9053 17.2541 19.1368 17.2541H20.8632C21.0947 17.2541 21.2842 17.464 21.2842 17.7206V19.6331ZM26.1263 19.6331C26.1263 19.8897 25.9368 20.0996 25.7053 20.0996H23.9789C23.7474 20.0996 23.5579 19.8897 23.5579 19.6331V17.7206C23.5579 17.464 23.7474 17.2541 23.9789 17.2541H25.6842C25.9158 17.2541 26.1053 17.464 26.1053 17.7206V19.6331H26.1263Z" fill="#4D4D4D"/>
</g>
<defs>
<clipPath id="clip0_47498_2532">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

      </div>
      <div className="actions_dropdown">
        
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_47498_2537)">
<circle cx="20" cy="20" r="20" fill="#E6E6E6"/>
<path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D"/>
</g>
<defs>
<clipPath id="clip0_47498_2537">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>


      </div>
    </div>
  </div>
  )
}

export default Header