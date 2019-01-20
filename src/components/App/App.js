import React from 'react';
import { Container } from '../Container';
import { CosplayersTable } from '../CosplayersTable';
import { Title } from '../Title';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cosplaygirls: [],
      fields: [],
    };
  }

  componentDidMount() {
    fetch('/.netlify/functions/cosplaygirls')
      .then(response => response.json())
      .then(data => {
        const [fieldsObject, ...cosplaygirls] = data;
        const fields = Object.keys(fieldsObject);
        this.setState({
          cosplaygirls,
          fields,
        });
      })
      .catch(() => {});
  }

  render() {
    const { cosplaygirls, fields } = this.state;
    const { socialsTypes } = this.props;
    return (
      <Container>
        <Title text={'Cosplaygirls'} />
        <CosplayersTable
          cosplaygirls={cosplaygirls}
          fields={fields}
          socialsTypes={socialsTypes}
        />
      </Container>
    );
  }
}
