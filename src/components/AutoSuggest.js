import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';

class AutoSuggest extends React.Component {
    render() {
        return (
            <Form.Group>
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    options={['Test', 'Something']}
                    placeholder="Search TV shows here"
                    selected={[]}
                    onChange={() => {}}
                />
            </Form.Group>
        )
    }
}

export default AutoSuggest;
