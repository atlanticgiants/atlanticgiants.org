// general
import React from 'react'
import './styles.scss'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ContactsForm extends React.Component {
  state = {
    name: '',
    subject: 'Contacto Atlantic Giants',
    subjectHasChanged: false,
    message: ''
  }

  handleNameChange = (event) => {
    const name = event.target.value
    if (!this.state.subjectHasChanged) {
      this.setState({
        name,
        subject: name !== '' ? `Contacto Atlantic Giants: ${name}` : 'Contacto Atlantic Giants'
      })
    } else {
      this.setState({name})
    }
  }

  handleSubjectChange = (event) => {
    const inputSubject = event.target.value
    this.setState({
      subject: inputSubject,
      subjectHasChanged: true
    })
  }

  handleMessageChange = (event) => {
    const message = event.target.value
    this.setState({message})
  }

  formSubmit = (e) => {
    e.preventDefault()
    const href = `mailto:hugovau@atlanticgiants.org?subject=Contacto Atlantic Giants: ${this.state.name}&body=${this.state.message}`.replace(/\s/g,"%20")
    window.open(href, '_blank')
  }


  render() {
    return (
      <section style={this.props.style} className='contacts-section'>
        <Form onSubmit={this.formSubmit} className='contacts-form' action={`mailto:hugovau@atlanticgiants.org`} method="get" target="_blank">
          <Row>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Nome</Form.Label>
                <Form.Control onChange={this.handleNameChange} value={this.state.name} name='ccname' autocomplete="cc-name" type='text' />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Assunto</Form.Label>
                <Form.Control onChange={this.handleSubjectChange} value={this.state.subject} name='subject' type='text' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='formBasicMessage'>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control onChange={this.handleMessageChange} value={this.state.message} name='body' as='textarea' type='text' rows='4' />
              </Form.Group>
            </Col>
          </Row>
          <button type='submit'>{'Enviar'}</button>
        </Form>
      </section>
    )
  }
}

ContactsForm.propTypes = {

}

export default ContactsForm;