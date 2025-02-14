export function Menu () {
  // useEffect(() => {
  //   let script

  //   const checkElement = setInterval(() => {
  //     const headerTrigger = document.querySelector('.header_trigger')
  //     if (headerTrigger) {
  //       clearInterval(checkElement) // Detiene la espera una vez que el elemento existe

  //       // Cargar common.min.js dinámicamente
  //       script = document.createElement('script')
  //       script.src = '/js/common.min.js'
  //       script.async = true
  //       script.defer = true
  //       document.body.appendChild(script)

  //       script.onload = () => {
  //         console.log('common.min.js cargado correctamente')
  //         const script2 = document.createElement('script')
  //         script2.src = '/js/index.min.js'
  //         script2.async = true
  //         script2.defer = true

  //         document.body.appendChild(script2)
  //       }
  //     }
  //   }, 100) // Verifica cada 100ms si el elemento está disponible

  //   return () => {
  //     clearInterval(checkElement)
  //     if (script) {
  //       document.body.removeChild(script)
  //       console.log('common.min.js eliminado')
  //     }
  //   }
  // }, [])

  return (
    <>
      <nav className='header_nav collapse' id='headerMenu'>
        <ul className='header_nav-list'>
          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='index.html'
              data-bs-toggle='collapse'
              data-bs-target='#homeMenu'
              data-trigger='dropdown'
              data-main-link='true'
              aria-expanded='false'
              aria-controls='homeMenu'
              data-page='home'
              data-page-parent='home'
            >
              <span className='nav-item_text'> Inicio </span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='homeMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='home'
                    data-page-parent='home'
                    href='index.html'
                  >
                    Home 1
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='home2'
                    data-page-parent='home'
                    href='index2.html'
                  >
                    Home 2
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='services.html'
              data-bs-toggle='collapse'
              data-bs-target='#servicesMenu'
              data-trigger='dropdown'
              data-page-parent='services'
              data-main-link='true'
              aria-expanded='false'
              aria-controls='servicesMenu'
            >
              <span className='nav-item_text'> Referidos</span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='servicesMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='services'
                    data-page-parent='services'
                    href='services.html'
                    data-main='true'
                  >
                    Services
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='single-service'
                    data-page-parent='services'
                    href='single-service.html'
                  >
                    Single Service
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='team'
                    data-page-parent='services'
                    href='team.html'
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='projects.html'
              data-bs-toggle='collapse'
              data-bs-target='#projectsMenu'
              data-trigger='dropdown'
              data-page-parent='projects'
              data-main-link='true'
              aria-expanded='false'
              aria-controls='projectsMenu'
            >
              <span className='nav-item_text'> Proyectos </span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='projectsMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='projects'
                    data-page-parent='projects'
                    href='projects.html'
                    data-main='true'
                  >
                    Projects 1
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='projects2'
                    data-page-parent='projects'
                    href='projects2.html'
                  >
                    Projects 2
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='single-project'
                    data-page-parent='projects'
                    href='single-project.html'
                  >
                    Single project
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='blog.html'
              data-bs-toggle='collapse'
              data-bs-target='#blogMenu'
              data-trigger='dropdown'
              data-page-parent='blog'
              data-main-link='true'
              aria-expanded='false'
              aria-controls='blogMenu'
            >
              <span className='nav-item_text'> Noticias </span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='blogMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='blog'
                    data-page-parent='blog'
                    href='blog.html'
                    data-main='true'
                  >
                    Blog 1
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='blog2'
                    data-page-parent='blog'
                    href='blog2.html'
                  >
                    Blog 2
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='single-post'
                    data-page-parent='blog'
                    href='single-post.html'
                  >
                    Single post
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='#'
              data-bs-toggle='collapse'
              data-bs-target='#pagesMenu'
              data-trigger='dropdown'
              data-page-parent='pages'
              aria-expanded='false'
              aria-controls='pagesMenu'
            >
              <span className='nav-item_text'> Pagos </span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='pagesMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='faq'
                    data-page-parent='pages'
                    href='faq.html'
                  >
                    FAQ
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='gallery-grid'
                    data-page-parent='pages'
                    href='gallery-grid.html'
                  >
                    Gallery grid
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='gallery-masonry'
                    data-page-parent='pages'
                    href='gallery-masonry.html'
                  >
                    Gallery masonry
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='error'
                    data-page-parent='pages'
                    href='404.html'
                  >
                    404
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='#'
              data-bs-toggle='collapse'
              data-bs-target='#pagesMenu'
              data-trigger='dropdown'
              data-page-parent='pages'
              aria-expanded='false'
              aria-controls='pagesMenu'
            >
              <span className='nav-item_text'> Postventa </span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='pagesMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='faq'
                    data-page-parent='pages'
                    href='faq.html'
                  >
                    FAQ
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='gallery-grid'
                    data-page-parent='pages'
                    href='gallery-grid.html'
                  >
                    Gallery grid
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='gallery-masonry'
                    data-page-parent='pages'
                    href='gallery-masonry.html'
                  >
                    Gallery masonry
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='error'
                    data-page-parent='pages'
                    href='404.html'
                  >
                    404
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className='header_nav-list_item dropdown'>
            <a
              className='nav-link nav-item dropdown-toggle'
              href='contacts.html'
              data-bs-toggle='collapse'
              data-bs-target='#contactsMenu'
              data-trigger='dropdown'
              data-page-parent='contacts'
              data-main-link='true'
              aria-expanded='false'
              aria-controls='contactsMenu'
            >
              <span className='nav-item_text'> Contactanos </span>
              <span className='icon icon-chevron_right' />
            </a>
            <div className='dropdown-menu collapse' id='contactsMenu'>
              <ul className='dropdown-list'>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='contacts'
                    data-page-parent='contacts'
                    href='contacts.html'
                    data-main='true'
                  >
                    Contacts 1
                  </a>
                </li>
                <li className='list-item'>
                  <a
                    className='dropdown-item nav-item'
                    data-page='contacts2'
                    data-page-parent='contacts'
                    href='contacts2.html'
                  >
                    Contacts 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

    </>
  )
}
