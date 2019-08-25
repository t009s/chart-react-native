# Charts React Native (chart-react-native)

This is a package for implementing charts on components easily with functionality.

## Installation

Use the package manager npm to install rating-react-native.

```bash
npm install chart-react-native --save
```
```bash
react-native link
```

## Usage

### 1. Vertical Bar Chart

![alt text](https://imgur.com/pOwxVX1.gif)

```javascript
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { VerticalBarChart } from 'chart-react-native'

export default class App extends Component {
  render() {
    const data = [
      {
        label: 'A',
        length: 20,
      },
      {
        label: 'B',
        length: 100,
      },
      {
        label: 'C',
        length: 80,
      },
      {
        label: 'D',
        length: 30,
      },
      {
        label: 'E',
        length: 50,
      }
    ]
    return (
      <View style={styles.container}>
        <VerticalBarChart data={data} style={{ width: 200, height: 300, backgroundColor: '#eeeeee', borderBottomWidth: 1, borderColor: "#bdbdbd" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
})
```
#### Props of Vertical Bar Chart

| Property | Default | Description |
| --- | --- | --- |
| data | Required | Array of objects where object can be `{label: 'C', length: 80}` or `{label: 'C', length: 80, color: 'red'}` where `color` is bar color. If not provided bar color will be random colored.  |
| style | All styles support | Styling the whole component |
| animationDuration | `2000` | animation duration of bars |
| textLabelStyle | All styles support | Styling the labels of bars |
| textDataStyle | All styles support | Styling the data length of bars |
| barWidth | `20` | width of the bars |
| barMaxHeight | `200` | maximum height of the bars |

### 2. Horizontal Bar Chart

![alt text](https://imgur.com/gkLGAou.gif)

```javascript
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { HorizontalBarChart } from 'chart-react-native'

export default class App extends Component {
  render() {
    const data = [
      {
        label: 'A',
        length: 20,
      },
      {
        label: 'B',
        length: 100,
      },
      {
        label: 'C',
        length: 80,
      },
      {
        label: 'D',
        length: 30,
      },
      {
        label: 'E',
        length: 50,
      }
    ]
    return (
      <View style={styles.container}>
        <HorizontalBarChart data={data} style={{ width: 200, height: 300, backgroundColor: '#eeeeee', borderBottomWidth: 1, borderColor: "#bdbdbd" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
})
```

#### Props of Horizontal Bar Chart

| Property | Default | Description |
| --- | --- | --- |
| data | Required | Array of objects where object can be `{label: 'C', length: 80}` or `{label: 'C', length: 80, color: 'red'}` where `color` is bar color. If not provided bar color will be random colored.  |
| style | All styles support | Styling the whole component |
| animationDuration | `2000` | animation duration of bars |
| textLabelStyle | All styles support | Styling the labels of bars |
| textDataStyle | All styles support | Styling the data length of bars |
| barHeight | `20` | height of the bars |
| barMaxWidth | `200` | maximum width of the bars |

## License
[MIT]