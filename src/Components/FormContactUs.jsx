export function FormContactUs () {
  return (
    <section className='contact section'>
      <div className='container'>
        <div className='contact_form'>
          <div className='contact_form-header section_header'>
            <span className='subtitle'>Contact us</span>
            <h2 className='title'>
              Do You Have any
              <span className='highlight'>Questions?</span>
            </h2>
          </div>
          <form
            action='form.php'
            className='contact_form-form contact-form d-flex flex-wrap justify-content-between'
            method='POST'
            name='feedbackForm'
            data-type='feedback'
          >
            <input
              className='contact-form_field contact-form_field--half field required'
              name='feedbackName'
              id='feedbackName'
              type='text'
              placeholder='Full name'
            />
            <input
              className='contact-form_field contact-form_field--half field required'
              data-type='tel'
              type='text'
              name='feedbackTel'
              id='feedbackTel'
              placeholder='Phone'
            />
            <input
              className='contact-form_field field required'
              data-type='email'
              type='text'
              name='feedbackEmail'
              id='feedbackEmail'
              placeholder='Email Address'
            />
            <textarea
              className='contact-form_field field required'
              data-type='message'
              name='feedbackMessage'
              id='feedbackMessage'
              placeholder='Message'
            />
            <button type='submit' className='contact-form_btn btn'>
              Send message
            </button>
          </form>
        </div>
        <div className='contact_info'>
          <h3 className='contact_info-header'>
            Are You Going to Implement Project?
          </h3>
          <ul className='contact-info'>
            <li className='contact-info_group'>
              <span className='name'>Address</span>
              <span className='content'>
                2047 Cyrus Viaduct East Jadynchester
              </span>
            </li>
            <li className='contact-info_group'>
              <span className='name'>Email</span>
              <span className='content d-inline-flex flex-column'>
                <a className='link' href='mailto:example.com'>
                  info@construct.com
                </a>
                <a className='link' href='mailto:example.com'>
                  support@construct.com
                </a>
              </span>
            </li>
            <li className='contact-info_group'>
              <span className='name'>Phone</span>
              <span className='content d-inline-flex flex-column'>
                <a className='link' href='tel:+13136453395'>
                  1 - 313 - 645 - 3395
                </a>
                <a className='link' href='tel:+14699702609'>
                  1 - 469 - 970 - 2609
                </a>
              </span>
            </li>
          </ul>
          <ul className='socials'>
            <li className='socials_item'>
              <a
                className='socials_item-link'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
              >
                <i className='icon-facebook' />
              </a>
            </li>
            <li className='socials_item'>
              <a
                className='socials_item-link'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'
              >
                <i className='icon-instagram' />
              </a>
            </li>
            <li className='socials_item'>
              <a
                className='socials_item-link'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <i className='icon-twitter' />
              </a>
            </li>
            <li className='socials_item'>
              <a
                className='socials_item-link'
                href='#'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='WhatsApp'
              >
                <i className='icon-whatsapp' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
