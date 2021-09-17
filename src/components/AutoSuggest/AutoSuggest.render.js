import React from 'react';
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';
import './AutoSuggest.scss';

const AsyncTypeahead = withAsync(Typeahead);

export class AutoSuggestPage extends React.Component {
    render() {
        const { isLoading } = this.props;
        return (
            <div className="search-box my-4">
                <AsyncTypeahead
                    delay={500} // debounce
                    isLoading={isLoading}
                    options={this._getOptions()}
                    id="auto-suggest"
                    placeholder="Search TV shows here"
                    promptText="Search TV shows here"
                    searchText="searching tv shows..."
                    selected={[]}
                    onChange={this._handleChange}
                    onSearch={this._handleSearch}
                />
            </div>
        )
    }
}

export default AutoSuggestPage;
