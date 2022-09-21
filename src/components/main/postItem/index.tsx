import * as C from "./style";

interface Props {
  id: string;
  title: string;
  tags: [string];
  slug: string;
  content: string;
  coverImagen: {
    url: string;
  };
}

function PostItem(props: Props) {
  return (
    <C.Container key={props.id}>
      <img src={props.coverImagen.url} alt="" />
      <div>
        <h1>{props.title}</h1>
        <h2>{props.slug}</h2>
        <p>{props.content}</p>
      </div>
    </C.Container>
  );
}

export default PostItem;
