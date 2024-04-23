/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle';

interface PostListDateProps {
  children: string;
}

const dateCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0.5rem 0;

  color: var(--postlist-date-color);
  font-weight: 500;
  font-size: 0.875rem;
  text-align: right;
`;

const Title = ({ children }: PostListDateProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return (
    <div css={dateCss}>
      <AiOutlineClockCircle
        css={css`
          margin-right: 0.25rem;
        `}
      />
      {new Date(children).toLocaleDateString('en-US', options)}
    </div>
  );
};

export default Title;
