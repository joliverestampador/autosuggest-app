import React from 'react';
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';

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
                    emptyLabel="Please refine search query"
                />
            </div>
        )
    }
}

export default AutoSuggestPage;
