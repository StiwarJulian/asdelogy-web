import { useEffect } from 'react'
import { FormContactUs } from '../../Components/FormContactUs'
import { Header } from '../../Components/Header'

export function Home () {
  // useEffect(() => {
  //   const elements = document.querySelectorAll('.countNum')
  //   elements.forEach(element => {
  //     const value = element.getAttribute('data-value')
  //     const suffix = element.getAttribute('data-suffix') || ''

  //     countUp(element, value, suffix)
  //   })
  // }, [])

  // const countUp = (element, value, suffix) => {
  //   for (let i = 0; i <= value; i++) {
  //     setTimeout(() => {
  //       element.textContent = i + suffix
  //     }, i * 10)
  //   }
  // }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/js/index.min.js'
    script.async = true
    script.defer = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Header />

      <main>
        <section className='hero primary-bg'>
          <div className='hero_deco'>
            <picture>
              <source
                data-srcset='src/assets/template/img/placeholder.jpg'
                srcSet='src/assets/template/img/placeholder.jpg'
                type='image/webp'
              />
              <img
                className='lazy'
                data-src='src/assets/template/img/placeholder.jpg'
                src='src/assets/template/img/placeholder.jpg'
                alt='media'
              />
            </picture>
          </div>
          <div className='container'>
            <div className='hero_media' data-aos='fade-up' data-aos-delay='50'>
              <picture>
                <source
                  data-srcset='src/assets/template/img/placeholder.jpg'
                  srcSet='src/assets/template/img/placeholder.jpg'
                  type='image/webp'
                />
                <img
                  className='lazy'
                  data-src='src/assets/template/img/placeholder.jpg'
                  src='src/assets/template/img/placeholder.jpg'
                  alt='media'
                />
              </picture>
            </div>
            <div className='hero_header section_header'>
              <span className='subtitle subtitle--extended'>
                Tus sueños son nuestro compromiso
              </span>
              <h1 className='title'>
                Nuestros Proyectos Superarán Tus Expectativas
              </h1>
              <p className='text'>
                El equipo de Arquitectos, Ingenieros y todos los empleados de
                Asdelogy, estamos comprometidos a brindar soluciones de
                viviendas sostenibles, creativas, y eficientes para el país
              </p>
              <a className='btn' href='#'>
                Consulta Ahora
              </a>
            </div>
            <div className='hero_main'>
              <div className='numbers'>
                <div className='numbers_group'>
                  <h2
                    className='countNum number'
                    data-suffix='+'
                    data-value='8'
                  >
                    0
                  </h2>
                  <span className='label'>
                    Proyectos <br />
                    Construidos
                  </span>
                </div>
                <div className='numbers_group'>
                  <h2
                    className='countNum number'
                    data-separator='.'
                    data-value='475'
                  >
                    0
                  </h2>
                  <span className='label'>
                    Unidades
                    <br />
                    Entregadas
                  </span>
                </div>
              </div>
              <div className='card' data-aos='fade-right'>
                <span className='card_underlay' />
                <div className='wrapper'>
                  <h3 className='title'>Metros Construidos</h3>
                  <span className='square highlight'>
                    78 000 м <sup>2</sup>
                  </span>
                  <span className='info'>Totalmente terminadas</span>
                  <a className='link link-arrow highlight' href='#'>
                    Detalles <i className='icon-arrow_right icon' />
                  </a>
                </div>
                <picture>
                  <source
                    data-srcset='src/assets/template/img/placeholder.jpg'
                    srcSet='src/assets/template/img/placeholder.jpg'
                    type='image/webp'
                  />
                  <img
                    className='lazy'
                    data-src='src/assets/template/img/placeholder.jpg'
                    src='src/assets/template/img/placeholder.jpg'
                    alt='media'
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <FormContactUs />
      </main>
    </>
  )
}
