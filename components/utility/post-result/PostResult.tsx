import styles from './PostResult.module.css';

export interface IPostResult {
  author: string, 
  creationDate: string, 
  post: string
}

const PostResult: React.FC<IPostResult> = ({ author, creationDate, post }) => {
  return (
    <div className={styles.container}>
      <div>
        <p>Post made by {author} on {creationDate}</p>
      </div>
      <div>
        <p>Message: {post}</p>
      </div>
    </div>
  );
};

export default PostResult;