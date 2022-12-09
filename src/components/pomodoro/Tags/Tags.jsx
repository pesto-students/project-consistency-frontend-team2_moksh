import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <TagsContainer>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <Tag
          onClick={() => handleTagClick(i)}
          activeTag={activeTag === i}
          key={i}
        >
          {tag}
        </Tag>
      ))}
    </TagsContainer>
  );
};

export default Tags;

const TagsContainer = styled.div`
  background: #2585c9;
  height: 4rem;
  width: 36rem;
  margin: 0 auto;
  border-radius: 2rem;
  display: flex;
  gap: 1rem;
  /* justify-content: center; */
  align-items: center;

  @media screen and (max-width: 767px){
    width: 20rem;
    height: 5rem;
  }
`;

const Tag = styled.button`
  all: unset;
  flex: 1;
  color: white;
  /* border: 2px solid black; */
  padding: 15px 15px;
  border-radius: 1rem;
  text-align: center;
  margin-left: 7px;
  margin-right: 7px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  ${({ activeTag }) =>
    activeTag &&
    css`
      background: #5fa8d3;
    `}
`;
