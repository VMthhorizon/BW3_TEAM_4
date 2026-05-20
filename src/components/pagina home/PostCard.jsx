import {
  HandThumbsUp,
  ChatText,
  Repeat,
  Send,
  Trash3,
  PencilSquare,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import getProfilePersonaleAction from "../../redux/actions/profileAction/profiloPersonal";

const PostCard = function ({ post }) {
  const dispatch = useDispatch();
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });

  const myPost = post?.username === profilo?.username;
  console.log(profilo?.username);

  useDispatch(() => {
    dispatch(getProfilePersonaleAction);
  }, [dispatch]);

  return (
    <div className="sidebar-card my-2">
      <div className="sidebar-card-content">
        {/* header */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <img
            src={post.user.image}
            alt="avatar"
            className="round-avatar"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "cover",
            }}
          />

          <div>
            <h6 className="mb-0">
              {post.user.name} {post.user.surname}
            </h6>

            <p className="text-muted mb-0">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* testo */}
        <h5 className="mb-3 fw-light">{post.text}</h5>

        {/* immagine post */}
        {post.image && (
          <img src={post.image} alt="post" className="img-fluid rounded mb-3" />
        )}

        {/* footer */}
        <div className="d-flex justify-content-around border-top pt-2">
          <div className="post-action">
            <HandThumbsUp />
            <span>Consiglia</span>
          </div>

          <div className="post-action">
            <ChatText />
            <span>Commenta</span>
          </div>

          <div className="post-action">
            <Repeat />
            <span>Diffondi</span>
          </div>

          <div className="post-action">
            <Send />
            <span>Invia</span>
          </div>
          {myPost && (
            <>
              <div className="post-action">
                <PencilSquare />
                <span>Modifica</span>
              </div>

              <div className="post-action">
                <Trash3 />
                <span>Elimina</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
