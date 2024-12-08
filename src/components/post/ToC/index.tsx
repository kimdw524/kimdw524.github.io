import useToC from '@/hooks/useToC';

import * as s from './ToC.css';

interface ToCProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const ToC = ({ contentRef }: ToCProps) => {
  const { IsFixed, nodes } = useToC({ contentRef, top: 96 });

  return (
    <div className={s.container}>
      <div className={s.toc({ fixed: IsFixed })}>
        {nodes.map((node, index) => (
          <span key={index} className={s.table({ selected: node.selected, type: node.type })}>
            <a href={`#${node.anchor}`} draggable={false}>
              {node.table}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ToC;
