import React, {Component} from 'react'
import {Grid, Header} from 'semantic-ui-react'
import './Footer.scss'

export default class Footer extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <footer>
        <div className="footer-inner">
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                  <Header as="h3" inverted>
                    {/*<Icon name="github" />*/}
                    <Header.Content>
                      Modulo Almacenes
                      <Header.Subheader>
                        Versión 0.1
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </footer>
    )
  }
}
