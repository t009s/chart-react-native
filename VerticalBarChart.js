import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class VerticalBarChart extends Component {

  constructor(props) {
    super(props)
    this.props.data.forEach(d => {
      d.anim = new Animated.Value(0)
    })
  }

  componentDidMount() {
    const max = Math.max(...this.props.data.map((d) => d.length))
    this.props.data.forEach((d, i) => {
      Animated.timing(
        d.anim,
        {
          toValue: (d.length * this.props.barMaxHeight) / max,
          duration: this.props.animationDuration,
        }
      ).start();
    });
  }

  render() {
    return (
      <View style={{ ...this.props.style, flexDirection: 'row', justifyContent: 'space-between' }}>
        {this.props.data.map((d, i) => {
          if (d.color !== undefined) {
            return (
              <View key={i} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ color: d.color, ...this.props.textLabelStyle }}>{d.label}</Text>
                <Text style={{ color: d.color, ...this.props.textDataStyle }}>{d.length}</Text>
                <Animated.View style={{ width: this.props.barWidth, height: d.anim, backgroundColor: d.color }} />
              </View>
            )
          } else {
            const color = ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
            return (
              <View key={i} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Text style={{ color: color, ...this.props.textLabelStyle }}>{d.label}</Text>
                <Text style={{ color: color, ...this.props.textDataStyle }}>{d.length}</Text>
                <Animated.View style={{ width: this.props.barWidth, height: d.anim, backgroundColor: color }} />
              </View>
            )
          }
        })}
      </View>
    )
  }
}

VerticalBarChart.propTypes = {
  animationDuration: PropTypes.number,
  barWidth: PropTypes.number,
  barMaxHeight: PropTypes.number,
}

VerticalBarChart.defaultProps = {
  animationDuration: 2000,
  barWidth: 20,
  barMaxHeight: 200,
}