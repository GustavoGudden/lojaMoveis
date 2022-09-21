import { gql, useQuery } from "@apollo/client";
import AreaTextC from "./areatext";
import PostItem from "./postItem";

import * as C from "./style";

const QUERY = gql`
  query {
    posts(stage: PUBLISHED) {
      content
      id
      slug
      title
      tags
      coverImage {
        url
      }
    }
  }
`;

interface GetLessonQueryResponse {
  posts: [
    {
      content: string;
      id: string;
      slug: string;
      title: string;
      tags: [string];
      coverImage: {
        url: string;
      };
    }
  ];
}

function Main() {
  const { data } = useQuery<GetLessonQueryResponse>(QUERY);
  return (
    <>
      <C.Banner></C.Banner>
      <AreaTextC />
      <C.H1>Produtos</C.H1>
      <C.Section>
        {data?.posts.map((item) => {
          return (
            <PostItem
              id={item.id}
              title={item.title}
              slug={item.slug}
              tags={item.tags}
              content={item.content}
              coverImagen={item.coverImage}
            />
          );
        })}
      </C.Section>
      <C.Section>
        {data?.posts.map((item) => {
          return (
            <PostItem
              id={item.id}
              title={item.title}
              slug={item.slug}
              tags={item.tags}
              content={item.content}
              coverImagen={item.coverImage}
            />
          );
        })}
      </C.Section>
    </>
  );
}

export default Main;
