<div align="center">
<h1>useEcharts <sup><sup><sub>v1</sub></sup></sup></h1>
React hooks for ECharts.
</div>

## Install

```sh
yarn add useEcharts

# npm install useEcharts
```

## Usage

```jsx
import useEcharts from 'useEcharts';

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

[MIT License](https://github.com/peng-yin/useEcharts/blob/main/LICENSE)

