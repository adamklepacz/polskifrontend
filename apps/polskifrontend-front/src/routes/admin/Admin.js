import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Admin.styl';
import { connect } from 'react-redux';
import mapStateToProps from '../../core/redux/mapStateToProps';
import mapDispatchToProps from '../../core/redux/mapDispatchToProps';
import AddBlog from './parts/AddBlog';
import BlogList from './parts/BlogList';
import Message from '../../components/Messaging/Message';

class Add extends React.Component {
  componentDidMount() {
    const { actions: { getAdminBlogList } } = this.props;
    getAdminBlogList();
  }

  render() {
    const { adminState: { blogList, blogListLoading, blogListError } } = this.props;
    const errorMessage = blogListError ? 'Błąd pobierania blogów - spróbuj odświezyć stronę' : '';

    return (
      <div className={style.container}>
        <AddBlog />
        <BlogList blogList={blogList} blogListLoading={blogListLoading} />
        <Message type="alert" message={errorMessage} isVisible={blogListError}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Add));
