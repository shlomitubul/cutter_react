import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Pageination extends Component {
  render() {
    const { itemsCount, pageSize, currentPage } = this.props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
      <div className="list-group list-group-horizontal" id="pagination">
        {pages.map(page => (
          <button
            key={page}
            type="button"
            className={
              currentPage === page
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action "
            }
            onClick={() => this.props.onPageSelected(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
}

Pageination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageSelected: PropTypes.func.isRequired
};
export default Pageination;
