import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './styles.scss';

class HomeScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'home.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <div id="home-scene">
        <section className="hero">
          <h1>
            <FormattedMessage id="home.title" />
          </h1>
          <h2>
            <FormattedMessage id="home.description" />
          </h2>
        </section>
      </div>
    );
  }
}

HomeScene.propTypes = {
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeScene),
);
