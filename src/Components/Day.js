import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const monthes = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const Day = (props) => {
  const { data } = props;
  const temperature = Math.round(data.temp[1].max.value);
  const description = data.weather_code.value;

  const getData = () => {
    const dates = new Date(data.observation_time.value);
    const num = dates.getDate();
    const day = dates.getDay();
    const month = dates.getMonth();
    return `${num} ${monthes[month]}, ${days[day]}`;
  };
  
  const number = getData();
  
  return (
    <View style={styles.days}>
      <Text>
        {`${number}: ${temperature} °C`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  days: {
    display: 'flex',
    flexWrap: 'nowrap',
    margin: '2%',
    paddingTop: 20,
    paddingBottom: 20,
    width: 300,
    backgroundColor: '#ebae34',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Day.prototype = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Day;
