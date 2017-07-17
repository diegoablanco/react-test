import React, { Component } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class LoginComponent extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({ error: touched && error })}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )
  render() {
    const { pristine, submitting } = this.props;
    return (
      <Grid verticalAlign="middle" centered columns={1} textAlign="center">
        <Grid.Column tablet={10} mobile={16} computer={6}>
          <Form onSubmit={this.login}>
            <Field name="user" type="text" component={this.renderField} label="Usuario" />
            <Field name="password" type="text" component={this.renderField} label="Contraseña" />
            <Button primary type='submit' disabled={pristine || submitting}>Entrar</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'login'})(LoginComponent);