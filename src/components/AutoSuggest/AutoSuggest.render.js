import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';

export class AutoSuggestPage extends React.Component {
    render() {
        return (
            <Form.Group>
                <Typeahead
                    id="auto-suggest"
                    labelKey="name"
                    options={['Test', 'Something']}
                    placeholder="Search TV shows here"
                    selected={[]}
                    onChange={this._handleChange}
                    onInputChange={this._handleOnInputChange}
                    onBlur={() => this.props.onSearch()}
                />
            </Form.Group>
        )
    }
}

export default AutoSuggestPage;
