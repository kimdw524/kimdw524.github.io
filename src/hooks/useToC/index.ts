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
}

const useToC = ({ contentRef, top }: UseTocProps) => {
  const [IsFixed, setIsFixed] = useState<boolean>(false);
  const [nodes, setNodes] = useState<TocNode[]>([]);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const getNodes = () => {
      const currentNodes: TocNode[] = [];

      content.querySelectorAll('h1, h2, h3').forEach((node) => {
        currentNodes.push({
          type: node.tagName.toLowerCase() as TocNode['type'],
          table: node.textContent || '',
          selected: false,
          node,
        });
      });

      setNodes(currentNodes);
    };

    getNodes();
  }, [contentRef]);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const selectTable = (select: number) => {
      setNodes((prev) =>
        prev.map((node, index) => {
          return { ...node, selected: index === select };
        }),
      );
    };

    const updateCurrentTable = () => {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const y = Math.round(nodes[i].node.getBoundingClientRect().y);

        if (y > 0) {
          continue;
        }

        selectTable(i);
        return;
      }

      selectTable(0);
    };

    const handleScroll = throttle(() => {
      const y = content.getBoundingClientRect().y;

      setIsFixed(y < top);
      updateCurrentTable();
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contentRef, nodes]);

  return { IsFixed, nodes };
};

export default useToC;
