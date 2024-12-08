import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

interface UseTocProps {
  contentRef: React.RefObject<HTMLDivElement>;
  top: number;
}

interface TocNode {
  type: 'h1' | 'h2' | 'h3';
  table: string;
  selected: boolean;
  node: Element;
  scroll: () => void;
}

const useToC = ({ contentRef, top }: UseTocProps) => {
  const [IsFixed, setIsFixed] = useState<boolean>(false);
  const [nodes, setNodes] = useState<TocNode[]>([]);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    let currentNodes: TocNode[] = [];

    const getNodes = () => {
      content.querySelectorAll('h1, h2, h3').forEach((node) => {
        currentNodes.push({
          type: node.tagName.toLowerCase() as TocNode['type'],
          table: node.textContent || '',
          selected: false,
          node,
          scroll() {
            node.scrollIntoView({
              behavior: 'smooth', // 부드러운 스크롤
              block: 'start', // 요소를 화면 상단에 맞추기
            });
          },
        });
      });

      setNodes(currentNodes);
    };

    const getCurrentTable = throttle(() => {
      for (let i = 1; i < currentNodes.length; i++) {
        const y = Math.round(currentNodes[i].node.getBoundingClientRect().y);

        if (y > 0) {
          currentNodes = currentNodes.reduce((acc, cur: TocNode, index) => {
            acc.push({ ...cur, selected: index === i - 1 } as TocNode);
            return acc;
          }, [] as TocNode[]);

          setNodes(currentNodes);
          break;
        }
      }
    }, 100);

    const handleScroll = () => {
      const y = content.getBoundingClientRect().y;

      setIsFixed(y < top);
      getCurrentTable();
    };

    getNodes();
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contentRef]);

  return { IsFixed, nodes };
};

export default useToC;
