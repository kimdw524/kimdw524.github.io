import Excerpt from './Excerpt';
import PostList from './PostList';
import Title from './Title';
import Date from './Date';
import Tag from './Tag';
import Banner from './Banner';

export default Object.assign(PostList, { Title, Excerpt, Date, Tag, Banner });
