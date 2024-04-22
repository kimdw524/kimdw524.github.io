import Excerpt from './Excerpt';
import PostList from './PostList';
import Title from './Title';
import Date from './Date';
import Tag from './Tag';

export default Object.assign(PostList, { Title, Excerpt, Date, Tag });
