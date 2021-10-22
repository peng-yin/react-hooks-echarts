<div align="center">
<h1>react-hooks-echarts <sup><sup><sub>v1</sub></sup></sup></h1>
React hooks for ECharts.
</div>

![](https://img.shields.io/npm/v/@pengyin/tools)
![](https://img.shields.io/github/license/peng-yin/tools)
![](https://img.shields.io/npm/types/@pengyin/tools)
![](https://img.shields.io/bundlephobia/min/@pengyin/tools)

## Install

```sh
yarn add react-hooks-echarts

# npm install react-hooks-echarts
```

## Usage

```jsx
import useEcharts from 'react-hooks-echarts';

const H = () => {
  const [chartRef, ref] = useEcharts()

  useEffect(() => {
    const chart = chartRef.current
    chart?.setOption({})
  }, [])

  return (
    <div ref={ref} className="chart" style={{ height: 800 }}></div>
  )
}
```


## Demo

[![Edit flooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/quiet-tdd-ff8ge?fontsize=14&hidenavigation=1&theme=dark)

## License

[MIT License](https://github.com/peng-yin/react-hooks-echarts/blob/main/LICENSE)

