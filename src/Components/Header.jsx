import { Menu } from './Menu'
import { Logo } from './Logo'

export function Header () {
  return (
    <>
      <header className='header' data-page='home' data-page-parent='home'>
        <div className='container d-flex'>
          <Menu />
          <Logo />

          <button
            className='header_trigger'
            data-bs-toggle='collapse'
            data-bs-target='#headerMenu'
            aria-controls='headerMenu'
            aria-expanded='false'
          >
            <span className='line line--short' />
            <span className='line' />
            <span className='line line--short' />
            <span className='line' />
          </button>
        </div>
      </header>
    </>
  )
}
