import { useEffect, useRef } from 'react';
import { ECharts } from 'echarts';

const echarts = require('echarts/lib/echarts');

echarts.registerTheme('theme', {
  // 全局调色盘。
  color: [
    '#488BFF',
    '#26CEBA',
    '#FFC069',
    '#FD6865',
    '#6D7EE4',
    '#FF9C6E',
    '#81C785',
    '#B47FEC',
    '#62A5F6',
    '#FF85C0',
  ],
});

const useEcharts = function () {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ECharts | null>(null);

  useEffect(() => {
    let resizeObserver: any;
    if (ref.current) {
      chartRef.current = echarts.init(ref.current, 'root');

      resizeObserver = observeSizeChange(ref.current, () => {
        chartRef.current?.resize();
      });
    }
    return () => {
      chartRef.current?.dispose();
      resizeObserver && ref.current && resizeObserver.unobserve(ref.current);
    };
  }, []);
  return [chartRef, ref] as const;
};

/**
 * 监听容器变化
 */
export const observeSizeChange = function (container: HTMLElement, cb: (entries: any) => void) {
  const resizeObserver =
    (window as any).ResizeObserver &&
    new (window as any).ResizeObserver((entries: any) => {
      // 在 Webkit 中，如果元素为隐藏的（该元素或其祖先元素的 style.display 为 "none"）则该属性返回 null。
      const isHidden = container && container.offsetParent === null;
      // 隐藏时不执行回调
      if (!isHidden) {
        cb(entries);
      }
    });
  resizeObserver && resizeObserver.observe(container);
  return resizeObserver;
};

export default useEcharts;
