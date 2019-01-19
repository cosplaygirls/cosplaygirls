import React from 'react';
import { Container } from '../Container';
import { CosplayersTable } from '../CosplayersTable';
import { Title } from '../Title';

export const App = ({ cosplaygirls, fields, socialsTypes }) => (
  <Container>
    <Title text={'Cosplaygirls'} />
    <CosplayersTable
      cosplaygirls={cosplaygirls}
      fields={fields}
      socialsTypes={socialsTypes}
    />
  </Container>
);
