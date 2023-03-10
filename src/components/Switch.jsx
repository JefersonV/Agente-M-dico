import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Switch(props) {
  const [state, setState] = useState(false);

  return (
    <Form>
      <FormGroup switch>
        <Input
          type="switch"
          checked={state}
          onClick={() => {
            setState(!state);
          }}
        />
        {/* <Label check>Checked switch checkbox input</Label> */}
      </FormGroup>
    </Form>
  );
}

export default Switch;