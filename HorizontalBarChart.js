import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'
import PropTypes from 'prop-types'

export default class HorizontalBarChart extends Component {

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
          toValue: (d.length * this.props.barMaxWidth) / max,
          duration: this.props.animationDuration,
        }
      ).start();
    });
  }

  render() {
    return (
      <View style={{ ...this.props.style, flexDirection: 'column', justifyContent: 'space-between' }}>
        {this.props.data.map((d, i) => {
          if (d.color !== undefined) {
            return (
              <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Animated.View style={{ width: d.anim, height: this.props.barHeight, backgroundColor: d.color }} />
                <Text style={{ color: d.color, ...this.props.textDataStyle }}>{d.length}</Text>
                <Text style={{ color: d.color, ...this.props.textLabelStyle }}>{d.label}</Text>
              </View>
            )
          } else {
            const color = ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
            return (
              <View key={i} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Animated.View style={{ width: d.anim, height: this.props.barHeight, backgroundColor: color }} />
                <Text style={{ color: color, ...this.props.textDataStyle }}>{d.length}</Text>
                <Text style={{ color: color, ...this.props.textLabelStyle }}>{d.label}</Text>
              </View>
            )
          }
        })}
      </View>
    )
  }
}

HorizontalBarChart.propTypes = {
  animationDuration: PropTypes.number,
  barHeight: PropTypes.number,
  barMaxWidth: PropTypes.number,
}

HorizontalBarChart.defaultProps = {
  animationDuration: 2000,
  barHeight: 20,
  barMaxWidth: 200,
}